import React, { useState } from 'react';
import { usePasswordContext } from './components/PasswordContext';
import PasswordProvider from './components/PasswordProvider';
import PasswordList from './components/Password/PasswordList';
import InputForm from './components/UI/InputForm';
import Search from './components/Search/Search';
import AddPasswordButton from './components/UI/Button/AddPasswordButton';

const AppContent = () => {
  const [InputOpen, setInputOpen] = useState(false);
  const [SearchOpen, setsearchOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const ctx = usePasswordContext();

  return (
    <>
      <h1>Password Keeper</h1>
      <h3>{`Total Passwords: ${ctx.passwords.length}`}</h3>
      <AddPasswordButton setInputOpen={setInputOpen} />
      <Search/>
      All Passwords : <br></br>
      <PasswordList setInputOpen={setInputOpen} setEditIndex={setEditIndex} />
      {InputOpen && (
        <InputForm setInputOpen={setInputOpen} editIndex={editIndex} />
      )}
    </>
  );
};

const App = () => {
  return (
    <PasswordProvider>
      <AppContent />
    </PasswordProvider>
  );
};

export default App;
