import React from 'react';

const AddPasswordButton = (props) => {
  return (
    <button onClick={() => props.setInputOpen(true)}>Add New Password</button>
  );
};

export default AddPasswordButton;
