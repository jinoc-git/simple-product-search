import React, { useState } from 'react';
import * as Styled from './style';
import IconInput from '../../common/inputs/iconInput/IconInput';
import IconSearch from '../../../assets/icon/IconSearch';
import { fetchProductListByKeyWord } from '../../../api/product';
import { useProductStoreActions } from '../../../store/productStore';

const SearchBar = () => {
  const [val, setVal] = useState('');
  const { setProducts } = useProductStoreActions();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (val === '') return;

    const res = await fetchProductListByKeyWord(val);
    setProducts(res.products);
  };

  return (
    <Styled.SearchBarContainer>
      <h2>검색창</h2>
      <Styled.SearchBarForm name="search-form" onSubmit={onSubmit}>
        <IconInput
          icon={<IconSearch />}
          $iconPosition="right"
          iconBtnType={'submit'}
          $w="460px"
          $h="40px"
          name="search-input"
          placeholder="상품을 검색하세요"
          onChange={onChangeInput}
        />
      </Styled.SearchBarForm>
    </Styled.SearchBarContainer>
  );
};

export default SearchBar;
