import React, { useCallback, useRef, useContext, useState } from 'react';
import { LayoutContext } from './SearchLayout';

const SearchBar = () => {
  const [_translation, setTranslation] = useState('');
  const [_imageResults, setImageResults] = useState({});
  const { setSearchId } = useContext(LayoutContext);
  const [_searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const setResults = useCallback((results) => setImageResults(results), [setImageResults]);
  const ref = useRef();

  const handleSubmit = async () => {
    setIsLoading(true);
    const query = ref.current.value;
    setSearchQuery(query);
    try {
      const response = await fetch(`/images`, {
        method: 'post',
        headers: { 
          'Accept': 'application/json' ,
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ query }),
      });
      const { googleResults, baiduResults, translation, searchId } = await response.json();
      setSearchId(searchId);
      setResults({ googleResults, baiduResults });
      setTranslation(translation);
    } catch (e) {
      setResults({ googleResults: [], baiduResults: [] });
      setTranslation(e);
      ref.current.value = ''; // Reset search bar text
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) handleSubmit();
  }

  return (
    <div>
      <p style={{ padding: '0 20% 0 20%' }}><strong>Type a search query into the search bar in English or in simplified Chinese. Your query will automatically translate into the other language. English queries will be queried in Google. Chinese queries will be queried in Baidu.</strong></p>
      <input placeholder="search" name="query" type="text" ref={ref} onKeyDown={handleKeyDown} disabled={!!isLoading} />
      <button onClick={handleSubmit} disabled={!!isLoading}>
        Submit. {isLoading}
      </button>
    </div>
  );
};

export default SearchBar;
