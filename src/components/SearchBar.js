import React, { useRef, useContext } from 'react';
import { css } from '@emotion/react';
import { LayoutContext } from './Layout';

const SearchBar = () => {
  const { setResults } = useContext(LayoutContext);
  const ref = useRef();

  const handleClick = async () => {
    // TODO: detect language and translate query
    const query = ref.current.value;
    const response = await fetch(`/results`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ EN: query, CN: query }),
    });
    const results = await response.json();
    setResults(results);
  }

  return (
    <div>
      <input placeholder="search" name="query" type="text" ref={ref} />
      <button onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default SearchBar;
