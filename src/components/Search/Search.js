import React  from 'react';

const Search = (props) => {
  
  return (
    <div>
      <label>Search: </label>
      <input
        type="text"
        value={props.searchTerm}
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
