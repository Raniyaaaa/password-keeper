import React from 'react';
import { usePasswordContext } from '../PasswordContext';
import PasswordItem from "./PasswordItem";

const PasswordList = ({ setInputOpen, setEditIndex }) => {
  const { passwords } = usePasswordContext();

  return (
    <ul>
      {passwords.map((item, index) => (
        <PasswordItem
          key={index}
          item={item}
          index={index}
          setInputOpen={setInputOpen}
          setEditIndex={setEditIndex}
        />
      ))}
    </ul>
  );
};

export default PasswordList;