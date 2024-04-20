import React, { useEffect, useState } from 'react';
import * as Styled from './style';
import IconInput from '../../common/inputs/iconInput/IconInput';
import IconSearch from '../../../assets/icon/IconSearch';
import { fetchProductListByKeyWord } from '../../../api/product';
import { useProductStoreActions } from '../../../store/productStore';
import { useSearchStoreActions, useSearchStoreState } from '../../../store/searchStore';

const SearchBar = () => {
  const { keyWord, isSearched } = useSearchStoreState();
  const { search } = useSearchStoreActions();
  const { setProducts } = useProductStoreActions();

  const [val, setVal] = useState(keyWord);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (val === '') return;

    search(val);
    const res = await fetchProductListByKeyWord(val);
    setProducts(res);
  };

  useEffect(() => {
    if (isSearched) setVal(keyWord);
    else setVal('');
  }, [isSearched, keyWord]);

  return (
    <Styled.SearchBarContainer>
      <h2>검색창</h2>
      <Styled.SearchBarForm name="search-form" onSubmit={onSubmit}>
        <IconInput
          icon={<IconSearch />}
          $iconPosition="right"
          iconBtnType="submit"
          $w="460px"
          $h="40px"
          name="search-input"
          value={val}
          placeholder="상품을 검색하세요"
          onChange={onChangeInput}
        />
      </Styled.SearchBarForm>
    </Styled.SearchBarContainer>
  );
};

export default SearchBar;
