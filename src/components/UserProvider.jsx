import { useState } from "react";
import UserContext from "../UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Somya Jain",
    email: "somya@example.com",
  });

  const updateUser = (newUser) => {
    setUser((prev) => ({ ...prev, ...newUser }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
