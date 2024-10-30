import React, { useContext, useState } from 'react';
import PasswordContext from '../PasswordContext';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { passwords } = useContext(PasswordContext);

  // Filter passwords based on the search term
  const filteredPasswords = passwords.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <label>Search: </label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && filteredPasswords.length > 0 && (
        <ul>
          {filteredPasswords.map((item, index) => (
            <li key={index}>{item.title}-{item.password}</li>
          ))}
        </ul>
      )}
      {searchTerm && filteredPasswords.length === 0 && (
        <p>No matching passwords</p>
      )}
    </div>
  );
};

export default Search;
