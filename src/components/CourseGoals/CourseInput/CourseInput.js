import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim() !== "") {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim() !== "") {
      props.onAddGoal(enteredValue);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label
        // style={{ color: !isValid ? "red" : "black" }}
        >
          Course Goal
        </label>
        <input
          // style={{
          //   borderColor: !isValid ? "red" : "black",
          //   background: !isValid ? "red" : "white",
          // }}
          type="text"
          onChange={goalInputChangeHandler}
        />

        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
