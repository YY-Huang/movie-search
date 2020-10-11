import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from '../../redux/actions';
import styled from 'styled-components';

const SearchOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.75rem 0 1rem 0;
  width: 90%;
  
  @media (min-width: 411px) {
    width: 75%;
  }
  
  @media (min-width: 768px) {
    margin: 1rem 0;
    width: 45%;
  }
  
  @media (min-width: 1024px) {
    width: 25%;
  }
`

const InputContainer = styled.div`
  display: flex;
`

const SelectContainer = styled(InputContainer)`
  flex-direction: column;
`
const SearchOptions = () => {
  const dispatch = useDispatch();
  const {
    includeAdult,
    language,
  } = useSelector(state => state.search);

  const handleIncludeAdultChange = event => {
    dispatch(updateQuery({
      includeAdult: event.target.checked,
    }));
  };

  const handleLanguageChange = event => {
    dispatch(updateQuery({
      language: event.target.value,
    }));
  };

  return (
    <SearchOptionsContainer>
      <InputContainer>
        <input type="checkbox" id="include-adult" onChange={handleIncludeAdultChange} checked={includeAdult} />
        <label for="include-adult">Include adult content</label>
      </InputContainer>
      <SelectContainer>
        <select id="language" onChange={handleLanguageChange} value={language}>
          <option value="en-us">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="zh">中文</option>
          <option value="ar">اَلْعَرَبِيَّةُ</option>
          <option value="ru">ру́сский язы́к</option>
          <option value="ko">한국어</option>
          <option value="jp">日本語</option>
          <option value="de">Deutsch</option>
        </select>
      </SelectContainer>
    </SearchOptionsContainer>
  );
};

export default SearchOptions