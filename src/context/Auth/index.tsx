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

  // se queremos revisar, por exemplo, un persmiso, ponemos una función antes de setear.
  // const fx = (newValue: User) => {
  //     if (currentUser?.role === 'admin') setCurrentUser(newValue)
  // }

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
