import React from 'react';
import './search.css';

const Search = props => {
  return (
    <div className="search">
      <label htmlFor="search">
        Search:
        <input 
          id="search"
          type="search" 
          placeholder="search monsters" 
          value={props.searchPhrase}
          onChange={e => props.onSearchPhraseChange(e.target.value)}
          // onChange={(event) => props.onSearchChange(event.value)}
        />
      </label>
    </div>
  );
};

export default Search;