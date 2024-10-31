import React, { useContext, useState } from 'react';
import PasswordContext from './components/PasswordContext';
import PasswordList from './components/Password/PasswordList';
import InputForm from './components/UI/InputForm';
import Search from './components/Search/Search';
import AddPasswordButton from './components/UI/Button/AddPasswordButton';

const App = () => {
  const [InputOpen, setInputOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const ctx = useContext(PasswordContext);
  console.log(ctx.passwords)
  console.log(ctx.passwords.length)

  const handleCloseForm = () => {
    setEditIndex(null);
    setInputOpen(false);
  };
  
  return (
    <div>
      <h1>Password Keeper...</h1>
      <h3>{`Total Passwords: ${ctx.passwords.length}`}</h3>
      <AddPasswordButton setInputOpen={setInputOpen} />
      <Search/>
      <br></br>
      {ctx.passwords.length>0 && `All Passwords : `}<br></br>
      <PasswordList setInputOpen={setInputOpen} setEditIndex={setEditIndex} />
      {InputOpen && (
        <InputForm 
        setInputOpen={setInputOpen} 
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        onCloseForm={handleCloseForm}
         />
      )}
    </div>
  );
};


export default App;
