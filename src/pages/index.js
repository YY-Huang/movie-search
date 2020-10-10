import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ResultList from '../components/ResultList';
import SearchInput from '../components/SearchInput';
import ShareLink from '../components/ShareLink';
import { updateQuery } from '../redux/actions';
import queryString from 'query-string';
import styled from  'styled-components';


const Page = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const ShareLinkWrapper = styled.div`
    margin: 1rem 0;
`

const IndexPage = () => {
    const dispatch = useDispatch();
    const results = useSelector(state => state.search.results);

    useEffect(() => {
        const {
            include_adult,
            language,
            query,
        } = queryString.parse(window.location.search)

        if (query) {
            dispatch(updateQuery({
                include_adult: include_adult,
                language,
                query,
            }));
        };
    }, []);



    return (
        <Page>
            <Title>Movie Search App</Title>
            <SearchInput />
            { !!results.length &&
                <ShareLinkWrapper title="Click to copy the search url">
                    <ShareLink />
                </ShareLinkWrapper>
            }
            <ResultList />
        </Page>
    );
};

export default IndexPage;