import React, { useState } from 'react';
import PasswordContext from './PasswordContext';

const PasswordProvider = (props) => {
  const [passwords, setPasswords] = useState([]);

  const addPassword = (title, password) => {
    if(title.length>0 && password.length>0){
      setPasswords((prev) => [...prev, { title, password }]);
      console.log("Updated passwords after add:", passwords);
    }
  };

  const updatePassword = (index, title, password) => {
    const updatedPasswords = [...passwords];
    updatedPasswords[index] = { title, password };
    setPasswords(updatedPasswords);
  };

  const deletePassword = (index) => {
    const updatedPasswords = passwords.filter((password, i) => i !== index);
    setPasswords(updatedPasswords);
  };

  return (
    <PasswordContext.Provider value={{ passwords, addPassword, updatePassword, deletePassword }}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
