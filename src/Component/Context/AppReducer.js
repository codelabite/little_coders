export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COURSES":
      return {
        ...state.courses,
        courses: [action.payload, ...state.courses],
      };

    case "REMOVE_COURSE":
      return {
        ...state.courses,
        courses: state.courses.filter((course) => course.id === action.payload),
      };

    case "EDIT_COURSE":
      const updateCourse = action.payload;
      const updateRealCourse = state.courses.map((course) => {
        if (course.id === updateCourse.id) {
          return updateCourse;
        }
        return course;
      });

      return {
        courses: state.updateRealCourse,
      };
    default:
      return state;
  }
};
