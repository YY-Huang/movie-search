import React from 'react';
import Poster from '../Poster';
import Truncate from 'react-truncate';
import VoteMeter from '../VoteMeter';
import transformResult from '../../utils/transformResult';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styled from 'styled-components';

const ResultCardOuter = styled.div`
    position: relative;
    display: flex;
    width: 300px;
    height: 225px;
    box-shadow: 0 5px 25px -5px rgba(0, 0, 0, 0.3), 0 5px 10px -5px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    overflow: hidden;

    @media (min-width:411px) {
        width: 360px;
        height: 270px;
    }

    @media (min-width: 1024px) {
        width: 450px;
        height: 337px;
    }
`

const ResultInfo = styled.div`
    height: 100%;
    width: 100%;
    margin: 0 0.5rem;
    font-size: 0.7rem;
    
    & > * {
        margin-bottom: 0.5rem;
    }

    & > *:last-child{
        margin-bottom: 0;
    }

    @media(min-width: 411px) {
        font-size: 0.8rem;

        & > * {
            margin-bottom: 0.6rem;
        }
    }

    @media (min-width: 768px) {
        font-size:  1rem;
    }
`

const Title = styled.h2`
    font-size: 1.2rem;
    margin: 0.75rem 0;
    line-height: 1;

    @media (min-width: 411px) {
        font-size: 1.25rem;
    }

    @media(min-width: 768px) {
        font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
        margin: 1.25rem 0;
    }
`

const Year = styled.div`
    color: ${props => props.theme.mediumGray};
`

const Description = styled.div``

const ResultCard = ({ result }) => {
    const {
        description,
        imagePath,
        title,
        voteAverage,
        voteCount,
        year
    } = transformResult(result);

    const lgScreen = useMediaQuery('(min-width: 1024px)');

    return (
        <ResultCardOuter>
            <Poster src={imagePath} />
            <ResultInfo>
                <Title>
                    <Truncate lines={3}>
                        {title}
                    </Truncate>
                </Title>
                <Year>{year}</Year>
                <Description>
                    <Truncate lines={lgScreen ? 6 : 4} >
                        {description}
                    </Truncate>
                </Description>
                <VoteMeter voteAverage={voteAverage} voteCount={voteCount} />
            </ResultInfo>
        </ResultCardOuter>
    );
};

export default ResultCard;