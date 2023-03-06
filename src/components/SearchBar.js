import React, { useRef, useContext } from 'react';
import { css } from '@emotion/react';
import { LayoutContext } from './Layout';

const SearchBar = () => {
  const { setResults, setTranslation } = useContext(LayoutContext);
  const ref = useRef();

  const handleSubmit = async () => {
    const query = ref.current.value;
    const response = await fetch(`/results`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const { googleResults, baiduResults, translation } = await response.json();
    setResults({ googleResults, baiduResults });
    setTranslation(translation);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) handleSubmit();
  }

  return (
    <div>
      <input placeholder="search" name="query" type="text" ref={ref} onKeyDown={handleKeyDown} />
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SearchBar;
