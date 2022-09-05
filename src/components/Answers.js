import React from "react";
import Checkbox from "./Checkbox";
import classes from '../styles/Answers.module.css'

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox type='checkbox' className={classes.answer} text='test ans' />
    </div>
  );
}
