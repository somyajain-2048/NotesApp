// export default MainApp;

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainApp() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Simple Login </h1>
        {isLoggedIn ? <Dashboard /> : <Login />}
      </div>
    </>
  );
}

export default MainApp;
