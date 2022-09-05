import React from "react";
import classess from "../styles/Account.module.css";

export default function Account() {
  return (
    <div className={classess.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
