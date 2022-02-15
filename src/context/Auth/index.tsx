/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */

import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
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

export { AuthContext, AuthProvider };
