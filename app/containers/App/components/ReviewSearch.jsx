import React from 'react';


const SearchBar = () => (
  <div className= "searchbar">
  <form action="/" method="get">
      <input
          type="text"
          id="header-search"
          placeholder="Search for movies by title..."
          name="s"
      />
      <button type="submit">Search</button>
  </form>
  </div>
);

export default SearchBar;