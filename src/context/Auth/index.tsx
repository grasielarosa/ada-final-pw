/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */

import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { User } from '../../types';

type ContextType = {
  currentUser?: Partial<User | undefined>;
  setCurrentUser: Dispatch<SetStateAction<Partial<User | undefined>>>;
};

const AuthContext = createContext<ContextType>({
  currentUser: {},
  setCurrentUser: () => undefined,
});

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<Partial<User | undefined>>();

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useRole = () => {
  const context = useContext(AuthContext);
  const { currentUser, setCurrentUser } = context;
  return { currentUser, setCurrentUser };
};

export { AuthContext, AuthProvider, useRole };
