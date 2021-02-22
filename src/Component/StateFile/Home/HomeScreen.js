import { Button } from "antd";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextState } from "../../Context/GlobalState";
import "./Home.css";

const HomeScreen = () => {
  const { courses, removeCourse } = useContext(ContextState);

  const deleteCourse = () => {
    removeCourse();
  };

  return (
    <div>
      <center>
        <div>We are ready to start some coding...!</div>
        <br />
        <br />
        <br />
        {courses.map(({ name, id }) => (
          <center key={id}>
            <div className="home__">
              <div>{name}</div>
              <div className="home__button">
                <Button className="home__button1">
                  <Link to={`/edit/${id}`}>Edit</Link>
                </Button>
                <Button
                  className="home__button2"
                  onClick={(e) => {
                    removeCourse(id);
                  }}
                >
                  Remove
                </Button>
              </div>
            </div>
          </center>
        ))}
      </center>
    </div>
  );
};

export default HomeScreen;
