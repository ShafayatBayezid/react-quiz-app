import React from "react";
import classes from "../styles/Videos.module.css";
import Video from "./Video";

import { NavLink } from "react-router-dom";

export default function Videos() {
  return (
    <div className={classes.videos}>
      <NavLink to="/quiz">
        <Video />
      </NavLink>
      <NavLink to="/quiz">
        <Video />
      </NavLink>
      <NavLink to="/quiz">
        <Video />
      </NavLink>
      <NavLink to="/quiz">
        <Video />
      </NavLink>
    </div>
  );
}
