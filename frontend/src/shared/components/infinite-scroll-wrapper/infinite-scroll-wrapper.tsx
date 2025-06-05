'use client';

import { API } from '@/shared/constants/api';
import SectionHeader from '@/shared/ui/section-header/section-header';
import Typography from '@/shared/ui/typography/typography';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import styles from './infinite-scroll-wrapper.module.css';

interface Props<T> {
  path: string;
  entity: string;
  renderItem: (data: T) => React.ReactNode;
}

const getURL = (entity: string, page: number = 1): string => {
  return `${API.basePath}/${entity}?page=${page}`;
};

export default function InfiniteScrollWrapper<T>(props: Props<T>) {
  const { path, entity, renderItem } = props;
  const [nextUrl, setNextUrl] = useState<string | null>(getURL(entity));
  const [hasMore, setHasMore] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [items, setItems] = useState<T[]>([]);

  const fetchData = async () => {
    if (!nextUrl) return;
    try {
      const response = await fetch(nextUrl);
      const data = await response.json();
      const hasMore = !!data.next;
      const url = getURL(entity, data.next);
      setItems((previousItems) => [...previousItems, ...data.results]);
      setNextUrl(url);
      setHasMore(hasMore);
    } catch (error) {
      console.error(error);
      setItems([]);
      setNextUrl(null);
      setHasMore(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {hasError && (
        <SectionHeader>
          <Typography variant="h4">Server error!</Typography>
        </SectionHeader>
      )}
      {!hasError && (
        <div className={styles['infinite-scroll-wrapper']}>
          <InfiniteScroll
            className={styles['infinite-scroll']}
            dataLength={items.length}
            next={fetchData}
            hasMore={hasMore}
            loader={
              <div className={styles['infinite-scroll-loader']}>
                <Typography variant="caption">Loading...</Typography>
              </div>
            }
            endMessage={
              <div className={styles['infinite-scroll-no-more-results']}>
                <Typography variant="caption">No more results.</Typography>
              </div>
            }
          >
            {items.map((data) => (
              <Link
                href={`${path}/${(data as { id: string }).id}`}
                key={uuidv4()}
              >
                {renderItem(data)}
              </Link>
            ))}
          </InfiniteScroll>
        </div>
      )}
    </>
  );
}
