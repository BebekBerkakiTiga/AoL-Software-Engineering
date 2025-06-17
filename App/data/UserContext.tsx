import React, { createContext, useContext, useState } from "react";

type User = {
  username: string;
  password: string;
  country: string;
  email?: string;
};

type UserContextType = {
  users: User[];
  addUser: (user: User) => void;
  currentUser: User | null;
  loginUser: (user: User) => void;
};

const UserContext = createContext<UserContextType>({
  users: [],
  addUser: () => {},
  currentUser: null,
  loginUser: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([
  {
    username: "Kepen",
    email: "kepen@gmail.com",
    password: "12345",
    country: "Japan",
  },
  {
    username: "Jojo",
    email: "jojo@gmail.com",
    password: "12345",
    country: "India",
  },
  {
    username: "Hyde",
    email: "hyde@gmail.com",
    password: "12345",
    country: "Indonesia",
  },
]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  const loginUser = (user: User) => {
    setCurrentUser(user);
  };

  return (
    <UserContext.Provider value={{ users, addUser, currentUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
