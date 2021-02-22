import { Button } from "antd";
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ContextState } from "../../Context/GlobalState";
import "./AddCourse.css";
import { v4 as uuid } from "uuid";

const AddCourse = () => {
  const hist = useHistory();
  const { courses, addCourses } = useContext(ContextState);
  const [input, setInput] = useState("");

  const onClickCourses = () => {
    const newCourse = {
      id: uuid(),
      name: input,
    };
    addCourses(newCourse);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <center className="holder">
        <input
          className="input"
          placeholder="Enter new Course"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div className="arrange">
          {" "}
          <Button
            className="btn"
            onClick={(e) => {
              onClickCourses();
              hist.push("/");
            }}
          >
            Save
          </Button>
          <Button className="btn2">
            <Link
              onClick={(e) => {
                hist.push("/");
              }}
            >
              Cancel
            </Link>
          </Button>
        </div>
      </center>
    </div>
  );
};

export default AddCourse;
