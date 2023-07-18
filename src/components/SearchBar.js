import React, { useRef, useContext } from 'react';
import { LayoutContext } from './Layout';

const SearchBar = () => {
  const { isLoading, setResults, setTranslation, setSearchId, setLoading } = useContext(LayoutContext);
  const ref = useRef();

  const handleSubmit = async () => {
    setLoading(true);
    const query = ref.current.value;
    try {
      const response = await fetch(`https://fwc-2023.ue.r.appspot.com/images`, {
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
      setLoading(false);
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) handleSubmit();
  }

  return (
    <div>
      <p><strong>Type a search query into the search bar in English or in simplified Chinese. Your query will automatically translate into the other language. English queries will be queried in Google. Chinese queries will be queried in Baidu.</strong></p>
      <input placeholder="search" name="query" type="text" ref={ref} onKeyDown={handleKeyDown} disabled={!!isLoading} />
      <button onClick={handleSubmit} disabled={!!isLoading}>
        Submit. {isLoading}
      </button>
    </div>
  );
};

export default SearchBar;
