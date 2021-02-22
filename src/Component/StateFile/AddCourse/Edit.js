import { Button } from "antd";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./AddCourse.css";
import { useHistory } from "react-router-dom";
import { ContextState } from "../../Context/GlobalState";

const EditCourse = (props) => {
  const { courses, editCourse } = useContext(ContextState);
  const hist = useHistory();
  const [input, setInput] = useState("");
  const [selectedCourse, setSelectedCourse] = useState({
    id: " ",
    name: " ",
  });

  const courrentID = props.match.params.id;

  useEffect(() => {
    const specificID = courrentID;
    const selectedCourse = courses.find((course) => course.id === specificID);
    setSelectedCourse(selectedCourse);
  }, [courses, courrentID]);

  return (
    <div>
      <br />
      <br />
      <br />
      <center className="holder">
        <input
          className="input"
          placeholder="Edit Course Name"
          value={selectedCourse.name}
          onChange={(e) => {
            // setInput(e.target.value);
            setSelectedCourse({
              ...selectedCourse,
              [e.target.name]: e.target.value,
            });
          }}
        />
        <div className="arrange">
          {" "}
          <Button
            className="btn"
            onClick={(e) => {
              editCourse(selectedCourse);
              hist.push("/");
            }}
          >
            Submit
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

export default EditCourse;
