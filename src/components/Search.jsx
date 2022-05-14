import { memo } from "react";
import styled from 'styled-components';

export const Search = memo(({ searchText, onChangeSearchText }) => {
  console.log('Search');

  const onClickSearch = () => {
    if (searchText !== '') {
      onChangeSearchText('');
    }
  }

  return (
    <div>
      <h3>キーワード検索</h3>
      <SInput
        type="text"
        placeholder="Input keyword"
        value={searchText}
        onChange={(e) => {
          onChangeSearchText(e.target.value);
        }}
      />
      <SButton onClick={onClickSearch}>クリア</SButton>
    </div>
  );
});

const SInput = styled.input`
  margin: 4px;
  border: 1px solid DarkGray;
  border-radius: 3px;
`;

const SButton = styled.button`
  width: 100px;
  margin-left:10px;
  background-color: #ddd;
  border: none;
  border-radius: 6px;
  padding: 2px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;