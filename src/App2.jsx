import React from "react";
import UserProvider from "./components/UserProvider";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

export default function App2() {
  return (
    <UserProvider>
      <Profile />
      <hr />
      <EditProfile />
    </UserProvider>
  );
}
