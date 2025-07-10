// import React, { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

// function Login() {
//   const { login } = useContext(AuthContext);
//   const [name, setname] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (name.trim()) {
//       login(name);
//       setname("");
//     }
//   };
//   return (
//     <div>
//       <form
//         action="
// 			"
//         onSubmit={handleLogin}
//       >
//         <input
//           type="text"
//           placeholder="enter username"
//           value={name}
//           onChange={(e) => setname(e.target.value)}
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

function Login() {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      login(name);
      setName("");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
