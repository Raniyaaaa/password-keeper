import React, { useState, useEffect, useContext } from 'react';
import PasswordContext from "../PasswordContext";
import Modal from './Modal';

const InputForm = (props) => {
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const passCtx = useContext(PasswordContext);

  useEffect(() => {
    if (props.editIndex !== null) {
      const item = passCtx.passwords[props.editIndex];
      setTitle(item.title);
      setPassword(item.password);
    }
  }, [props.editIndex, passCtx.passwords]);
  

  const handleSubmit = () => {

    if (props.editIndex !== null) {
      passCtx.updatePassword(props.editIndex, title, password);
      props.setEditIndex(null);
    } else {
      passCtx.addPassword(title, password);
    }
    props.onCloseForm();
  };

  return (
    <Modal onClick={props.onCloseForm}>
        <h2>{props.editIndex !== null ? 'Edit Password' : 'Add New Password'}</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button onClick={handleSubmit}>
          {props.editIndex !== null ? 'Update' : 'Add'}
        </button>
        <button onClick={() => props.onCloseForm()}>X</button>
    </Modal>
  );
};

export default InputForm;
