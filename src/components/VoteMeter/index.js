import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import styled from 'styled-components';

const VoteMeterContainer = styled.div`
  color: ${props => props.theme.mediumGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Stars = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  * {
    font-size: 1rem !important;
  }
`

const VoteMeter = ({ voteAverage, voteCount }) => {
  const renderStars = () => {
    const starsToReturn = [];
    let roundedAverage = Math.round(voteAverage) * 0.5;

    while (roundedAverage > 0.5 || starsToReturn.length < 5) {
      if (roundedAverage >= 1) {
        starsToReturn.push(<StarIcon />);
        roundedAverage -= 1;
      } else if (roundedAverage === 0.5) {
        starsToReturn.push(<StarHalfIcon />);
        roundedAverage -= 0.5;
      } else {
        starsToReturn.push(<StarBorderOutlinedIcon />);
      }
    }

    return starsToReturn;
  }

  return (
    <VoteMeterContainer>
      <Stars>
        {renderStars()}
      </Stars>
      <div>{voteCount} reviews</div>
    </VoteMeterContainer>
  )
}

export default VoteMeter;