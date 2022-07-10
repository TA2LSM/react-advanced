import React, { useContext } from "react";
import UserContext from "./userContext";

function Login(props) {
  const userContext = useContext(UserContext);

  return (
    <div>
      <br />
      <button onClick={() => userContext.onLoggedIn("TA2LSM")}>Login</button>
    </div>
  );
}

export default Login;
