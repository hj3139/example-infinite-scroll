import { useCallback, useEffect, useState } from 'react';

import { Card } from 'components';
import { useInfiniteScroll } from 'hooks/infiniteScroll';
import styled from 'styled-components';

import { dummy, getDummyFn } from './dummy';

const CardListWrapper = styled.div`
  padding: 20px 0;
  height: 100vh;
  overflow: scroll;
`;

export const CardList = () => {
  const [currentData, setCurrentData] = useState<
    { idx: number; title: string; content: string }[]
  >([]);

  const [target, setTarget] = useState<Element | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const getDummy = (page: number, pageSize: number) => {
    setCurrentData(prev => {
      return [...prev, ...getDummyFn(page, pageSize).datas];
    });
    setLoading(false);
  };

  const onIntersect = useCallback<IntersectionObserverCallback>(
    ([entry]) => {
      if (entry.isIntersecting && currentData.length < dummy.totalElemnt) {
        setLoading(true);
        getDummy(currentPage + 1, 10);
        setCurrentPage(currentPage + 1);
      }
    },
    [currentPage]
  );

  useEffect(() => {
    const elements = document.querySelectorAll('.card-list-item');

    setTarget(elements[elements.length - 1]);
  }, [document.querySelectorAll('.card-list-item')]);

  useEffect(() => {
    getDummy(0, 10);
  }, []);

  useInfiniteScroll({
    root: document.querySelector('.card-list'),
    target,
    onIntersect
  });

  return (
    <CardListWrapper className='card-list'>
      {currentData.length > 0 &&
        currentData.map((arr, idx) => (
          <Card key={idx} {...arr} className='card-list-item' />
        ))}
      {loading && <div>Loading ....</div>}
    </CardListWrapper>
  );
};
