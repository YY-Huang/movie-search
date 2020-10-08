import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuery } from '../../redux/actions';
import styled from 'styled-components';

const SearchInputComponent = styled.div`
    height: 2rem;
    width: 80%;
    display: flex;
    justify-content: center;
`

const Input = styled.input`
    width: 100%;
    text-align: center;

    ::placeholder{
        color: ${props => props.theme.lightGray}
    }
`

const SearchInput = () => {
    const dispatch = useDispatch();
    const query = useSelector(state => state.search.query);

    const handleInput = event => {
        dispatch(updateQuery(event.target.value))
    }

    return (
        <SearchInputComponent>
            <Input
                onChange={handleInput}
                placeholder="Find a movie, TV show, or person"
                value={query}
            />
        </SearchInputComponent>
    )
};

export default SearchInput;