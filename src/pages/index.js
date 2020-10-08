import React from 'react';
import SearchInput from '../components/SearchInput';
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

    @media (min-width: 1024px) {
        font-size: 3rem;
    }
`

const IndexPage = () => {
    return (
        <Page>
            <Title>Movie Search App</Title>
            <SearchInput />
        </Page>
    );
};

export default IndexPage;