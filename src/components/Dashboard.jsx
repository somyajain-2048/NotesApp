// import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// function Dashboard() {
//   const { username, logout } = useContext(AuthContext);
//   return (
//     <div>
//       <h2>Welcome,{username}</h2>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// }

// export default Dashboard;

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { username, logout } = useContext(AuthContext);
  return (
    <div>
      <h2>Welecome,{username}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
