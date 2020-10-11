import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ResultList from '../components/ResultList';
import SearchInput from '../components/SearchInput';
import SearchOptions from '../components/SearchOptions';
import ShareLink from '../components/ShareLink';
import { updateQuery } from '../redux/actions';
import queryString from 'query-string';
import styled from 'styled-components';

const Page = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Title = styled.h1`
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 2.5rem;  
  }
  @media (min-width: 1024px) {
    font-size: 3rem;  
  }
`

const Toolbar = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`

const ShareLinkWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 50%;
  transform: translateX(50%);
  @media(min-width: 758px) {
    top: 1rem;
    right: 10%;
    transform: none;
  }
`

const IndexPage = () => {
  const dispatch = useDispatch();
  const results = useSelector(state => state.search.results);

  useEffect(() => {
    const {
      include_adult,
      language,
      query,
    } = queryString.parse(window.location.search);

    if (query) {
      dispatch(updateQuery({
        includeAdult: include_adult,
        language,
        query,
      }));
    };
  }, []);

  return (
    <Page>
      <Title>Movie Search App</Title>
      <SearchInput />
      <Toolbar>
        <SearchOptions />
        {!!results.length &&
          <ShareLinkWrapper title="Click to copy the search url">
            <ShareLink />
          </ShareLinkWrapper>
        }
      </Toolbar>
      <ResultList />
    </Page>
  );
};

export default IndexPage;