import React, { useState } from 'react';
import * as Styled from './style';
import IconInput from '../../common/inputs/iconInput/IconInput';
import IconSearch from '../../../assets/IconSearch';

const SearchBar = () => {
  const [val, setVal] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  return (
    <Styled.SearchBarContainer>
      <h2>검색창</h2>
      <Styled.SearchBarForm name="search-form">
        <IconInput
          icon={<IconSearch />}
          iconPosition="right"
          name="search-input"
          onChange={onChangeInput}
        />
      </Styled.SearchBarForm>
    </Styled.SearchBarContainer>
  );
};

export default SearchBar;
