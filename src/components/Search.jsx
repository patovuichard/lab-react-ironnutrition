import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
    props.selectedFood(event.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <form>
        <label htmlFor="search">Search</label>
        <Input
          name="search"
          value={searchInput}
          type="text"
          onChange={handleSearch}
        />
      </form>
    </>
  );
}

export default Search;
