import React from "react";
import authFn from "../../appWrite/authFn";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authStore";

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user.userData);
  return (
    <div>
      nice job{" "}
      {Object.keys(user).map((e) => (
        <li>{e + " : " + user[e]}</li>
      ))}
      <button
        className="logout"
        onClick={() => {
          authFn.logout().then(() => dispatch(authActions.logout()));
        }}
      >
        Log Out
      </button>{" "}
    </div>
  );
};

export default Account;
