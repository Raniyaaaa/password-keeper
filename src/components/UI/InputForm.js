import React, { useState, useEffect } from 'react';
import { usePasswordContext } from "../PasswordContext";
import Modal from './Modal';

const InputForm = (props) => {
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const { addPassword, updatePassword, passwords } = usePasswordContext();

  useEffect(() => {
    if (props.editIndex !== null) {
      const item = passwords[props.editIndex];
      setTitle(item.title);
      setPassword(item.password);
    }
  }, [props.editIndex, passwords]);

  const handleSubmit = () => {
    if (props.editIndex !== null) {
      updatePassword(props.editIndex, title, password);
    } else {
      addPassword(title, password);
    }
    props.setInputOpen(false);
  };

  return (
    <Modal>
        <h2>{props.editIndex !== null ? 'Edit Password' : 'Add New Password'}</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleSubmit}>
          {props.editIndex !== null ? 'Update' : 'Add'}
        </button>
        <button onClick={() => props.setInputOpen(false)}>X</button>
    </Modal>
  );
};

export default InputForm;
