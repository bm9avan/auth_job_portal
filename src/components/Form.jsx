import React, { useState } from "react";
import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authStore";
import SignUp from "./SignUp";
import Login from "./Login";

const FormComponent = () => {
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const auth = useSelector((s) => s.a);

  if (auth) {
    return (
      <div>
        nice job{" "}
        <button onClick={() => dispatch(authActions.logout())}>Log out</button>{" "}
      </div>
    );
  }

  return (
    <>
      <div className="linkouter">
        <span>Account {isSignUp ? "already" : "does't"} exists </span>
        <a className="inLink" onClick={() => setIsSignUp((p) => !p)}>
          {isSignUp ? "Login" : "SignUp"}
        </a>
      </div>
      {isSignUp ? <SignUp /> : <Login />}
    </>
  );
};

export default FormComponent;
