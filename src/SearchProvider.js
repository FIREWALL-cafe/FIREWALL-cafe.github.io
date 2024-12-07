import { useState } from 'react';

const SearchProvider = ({ children }) => {
  const [name, setName] = useState('World');
  const value = {
    state: { name },
    actions: { setName },
  };
  return (
    <SearchContext.Provider>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;
