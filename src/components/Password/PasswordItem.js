import React from 'react';
import { usePasswordContext } from "../PasswordContext";

const PasswordItem = ({ item, index, setInputOpen, setEditIndex }) => {
  const { deletePassword } = usePasswordContext();

  const handleEdit = () => {
    setEditIndex(index);
    setInputOpen(true);
  };

  return (
    <li>
      {item.title} - {item.password}
      <button onClick={() => deletePassword(index)}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
};

export default PasswordItem;