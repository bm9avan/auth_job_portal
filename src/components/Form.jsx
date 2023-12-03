import React, { useEffect, useState } from "react";
import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authStore";
import SignUp from "./SignUp";
import Login from "./Login";
import authFn from "../appWrite/AuthFn";

const FormComponent = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authFn
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(authActions.login({ userData }));
        } else {
          dispatch(authActions.logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  const auth = useSelector((s) => s.status);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (auth) {
    return (
      <div>
        nice job{" "}
        <button
          onClick={() => {
            authFn.logout().then(() => dispatch(authActions.logout()));
          }}
        >
          Log out
        </button>{" "}
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
