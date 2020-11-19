import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterResults, updateQuery } from '../../redux/actions';
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

  const [checkedRating, setCheckedRating] = useState(1);
  console.log(checkedRating)

  const handleClickRating = rating => {
    setCheckedRating(rating);
  }

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

  useEffect(() => {
    dispatch(filterResults(checkedRating))
  }, [checkedRating])

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
      <div>
        <label>1</label>
        <input type="radio" value={1} checked={checkedRating === 1} onClick={() => handleClickRating(1)}/>
      </div>
      <div>
        <label>2</label>
        <input type="radio" value={2} checked={checkedRating === 2} onClick={() => handleClickRating(2)}/>
      </div>
      <div>
        <label>3</label>
        <input type="radio" value={3} checked={checkedRating === 3} onClick={() => handleClickRating(3)}/>
      </div>
      <div>
        <label>4</label>
        <input type="radio" value={4} checked={checkedRating === 4} onClick={() => handleClickRating(4)}/>
      </div>
      <div>
        <label>5</label>
        <input type="radio" value={5} checked={checkedRating === 5} onClick={() => handleClickRating(5)}/>
      </div>
    </SearchOptionsContainer>
  );
};

export default SearchOptions