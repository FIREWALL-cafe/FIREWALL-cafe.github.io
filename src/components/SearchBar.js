import React from 'react';
import { css } from '@emotion/react';

const SearchBar = () => {

  return (
    <form method="post">
    <input placeholder="search" name="query" type="text"/>
    <button type="submit">
      Submit
    </button>
  </form>
  );
};

export default SearchBar;
