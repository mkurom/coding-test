import { memo } from "react";

export const Search = memo(({ searchText, onChangeSearchText }) => {
  console.log('Search');

  const onClickSearch = () => {
    if (searchText !== '') {
      onChangeSearchText('');
    }
  }

  return (
    <div>
      <p>キーワード検索</p>
      <input
        type="text"
        placeholder="Input keyword"
        value={searchText}
        onChange={(e) => {
          onChangeSearchText(e.target.value);
        }}
      />
      <button type="button" onClick={onClickSearch}>クリア</button>
    </div>
  );
});