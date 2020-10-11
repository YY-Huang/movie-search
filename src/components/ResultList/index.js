import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import ResultCard from '../ResultCard';
import { getNextPage } from '../../redux/actions';
import styled from 'styled-components';

const ResultListContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin: 1rem 0;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1500px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const ResultList = () => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.search.page);
  const results = useSelector(state => state.search.results);

  const requestNextPage = () => {
    dispatch(getNextPage(page + 1));
  };

  const renderResults = () => (
    results.map(result => (
      <ResultCard result={result} key={result.id} />
    ))
  );

  return (
    <InfiniteScroll
      dataLength={results.length}
      next={requestNextPage}
      hasMore={true}
      style={{ overflow: 'visible' }}
    >
      <ResultListContainer>
        {renderResults()}
      </ResultListContainer>
    </InfiniteScroll>
  )
};

export default ResultList;