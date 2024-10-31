import React, { useContext, useState } from 'react';
import PasswordContext from '../PasswordContext';

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
