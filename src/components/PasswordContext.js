import { createContext, useContext } from 'react';

const PasswordContext = createContext();

export const usePasswordContext = () => {
  return useContext(PasswordContext);
};

export default PasswordContext;