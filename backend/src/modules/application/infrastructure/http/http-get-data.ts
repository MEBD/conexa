import { HttpService } from '@nestjs/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';

interface Params<I, T> {
  service: HttpService;
  url: string;
  adapter: (response: I) => T;
}

export const HTTPGetData = async <I, T>(params: Params<I, T>): Promise<T> => {
  const { service, url, adapter } = params;
  const request = service.get<I>(url);
  return await firstValueFrom(
    request.pipe(
      map((response: AxiosResponse<I>): T => adapter(response.data)),
      catchError((error: AxiosError) => {
        // TODO: Check status error and propagate
        throw new Error(
          `An error happened when get data. Error: ${error.message}`,
        );
      }),
    ),
  );
};
