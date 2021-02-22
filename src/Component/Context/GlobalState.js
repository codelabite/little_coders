import React, { useReducer, useEffect, useState, createContext } from "react";
import { AppReducer } from "./AppReducer";
import { v4 as uuid } from "uuid";

const initState = {
  courses: [
    { id: uuid(), name: "ReactJS" },
    { id: uuid(), name: "MongoDB" },
    { id: uuid(), name: "NodeJS" },
  ],
};

export const ContextState = createContext(initState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  const addCourses = (course) => {
    dispatch({
      type: "ADD_COURSES",
      payload: course,
    });
  };

  const removeCourse = (id) => {
    dispatch({
      type: "REMOVE_COURSE",
      payload: id,
    });
  };

  const editCourse = (course) => {
    dispatch({
      type: "EDIT_COURSE",
      payload: course,
    });
  };

  return (
    <ContextState.Provider
      value={{ courses: state.courses, addCourses, removeCourse, editCourse }}
    >
      {children}
    </ContextState.Provider>
  );
};
