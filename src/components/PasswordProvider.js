import React, { useState } from 'react';
import PasswordContext from './PasswordContext';

const PasswordProvider = ({ children }) => {
  const [passwords, setPasswords] = useState([]);

  const addPassword = (title, password) => {
    setPasswords((prev) => [...prev, { title, password }]);
  };

  const updatePassword = (index, title, password) => {
    const updatedPasswords = [...passwords];
    updatedPasswords[index] = { title, password };
    setPasswords(updatedPasswords);
  };

  const deletePassword = (index) => {
    const updatedPasswords = passwords.filter((_, i) => i !== index);
    setPasswords(updatedPasswords);
  };

  return (
    <PasswordContext.Provider value={{ passwords, addPassword, updatePassword, deletePassword }}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
