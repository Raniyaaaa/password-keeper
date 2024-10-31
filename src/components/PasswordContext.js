import React from 'react';

const PasswordContext = React.createContext({
  passwords: [],
  addPassword: (title, password) => {},
  deletePassword: (index) => {},
  editPassword: (index, title, password) => {},
});


export default PasswordContext;