import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {/* <Checkbox type="checkbox" className={classes.answer} text="test ans" /> */}
      {options.map((option, index) => (
        <Checkbox
          type="checkbox"
          className={classes.answer}
          text={option.title}
          value={index}
          key={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
}
