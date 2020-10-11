import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuery } from '../../redux/actions';
import styled from 'styled-components';

const SearchInputContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`

const Input = styled.input`
  padding: 0.3rem;
  width: 100%;
  text-align: center;
  ::placeholder {
    color: ${props => props.theme.lightGray}
 }
 
  @media (min-width: 768px) {
    padding: 0.5rem;
    font-size: 1rem;
  }
 
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`

const SearchInput = () => {
  const dispatch = useDispatch();
  const query = useSelector(state => state.search.query);

  const handleInput = event => {
    dispatch(updateQuery({
      query: event.target.value,
    }));
  }

  return (
    <SearchInputContainer>
      <Input
        onChange={handleInput}
        placeholder="Find a movie, TV show, or person"
        value={query}
      />
    </SearchInputContainer>
  );
};

export default SearchInput;