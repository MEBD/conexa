import { HttpService } from '@nestjs/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { Cache } from 'cache-manager';
import { catchError, firstValueFrom, map, of } from 'rxjs';

interface Params<I, T> {
  service: HttpService;
  cache: Cache;
  url: string;
  adapter: (response: I) => T;
}

export const HTTPGetData = async <I, T>(params: Params<I, T>): Promise<T> => {
  const { service, cache, url, adapter } = params;

  const cachedData = await cache.get<T>(url);
  if (cachedData) return await firstValueFrom(of(cachedData));

  const request = service.get<I>(url);
  return await firstValueFrom(
    request.pipe(
      map(async (response: AxiosResponse<I>): Promise<T> => {
        const data = adapter(response.data);
        await cache.set(url, data);
        return data;
      }),
      catchError((error: AxiosError) => {
        // TODO: Check status error and propagate in error
        const erroMessage = `An error happened when get data. Error: ${error.message}`;
        throw new Error(erroMessage);
      }),
    ),
  );
};
