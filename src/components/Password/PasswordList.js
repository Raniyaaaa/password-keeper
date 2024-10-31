import React, { useContext } from 'react';
import PasswordContext from '../PasswordContext';
import PasswordItem from "./PasswordItem";

const PasswordList = (props) => {
  const passCtx = useContext(PasswordContext)

  return (
    <ul>
      {props.passwords.map((item, index) => (
        <PasswordItem
          key={index}
          item={item}
          index={index}
          setInputOpen={props.setInputOpen}
          setEditIndex={props.setEditIndex}
        />
      ))}
    </ul>
  );
};

export default PasswordList;