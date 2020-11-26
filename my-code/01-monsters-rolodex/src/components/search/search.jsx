import React from 'react';
import './search.css';

const Search = ({ prompt, searchPhrase, onSearchPhraseChange}) => {
  return (
    <div className="search">
      <label htmlFor="search">
        Search:
        <input 
          id="search"
          type="search" 
          placeholder={prompt} 
          value={searchPhrase}
          onChange={e => onSearchPhraseChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Search;