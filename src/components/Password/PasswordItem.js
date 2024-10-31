import React,{useContext} from 'react';
import PasswordContext from "../PasswordContext";

const PasswordItem = (props) => {
  const passCtx = useContext(PasswordContext);

  const handleEdit = () => {
    props.setEditIndex(props.index);
    props.setInputOpen(true);
  };

  return (
    <li>
      {props.item.title} - {props.item.password}
      <button onClick={() => passCtx.deletePassword(props.index)}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
};

export default PasswordItem;