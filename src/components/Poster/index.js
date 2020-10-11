import React, { useState } from 'react';
import styled from 'styled-components';

const PosterContainer = styled.div`
  position: relative;
`

const PosterImage = styled.img`
  opacity: ${props => props.loaded ? 1 : 0};
  width: 150px;
  height: 225px;
  transition: all 0.3s ease-out;
  @media (min-width: 411px) {
    width: 180px;
    height: 270px;
  }
  @media (min-width: 1024px) {
    width: 225px;
    height: 337px;
  }
`

const EmptyPoster = styled(PosterImage)`
  opacity: 1;
  background-color: ${props => props.theme.black}
`

const Poster = ({ src }) => {
  const [ loaded, setLoaded ] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <PosterContainer>
      {src ?
        <PosterImage src={src} onLoad={handleLoad} loaded={loaded} /> :
        <EmptyPoster />
      }
    </PosterContainer>
  );
}

export default Poster;