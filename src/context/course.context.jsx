
"use client";
import React, { createContext, useState } from "react";

export const CourseContext = createContext(null);

const CoursesContextProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);

    const addCourse = (course) => [setCourses([...courses, course])];
    const removeCourse = (id) => {
        setCourses(courses.filter((c) => c._id != id));
    };

    const value = {
        courses,
        setCourses,
        addCourse,
        removeCourse,
    };

    return (
        <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
    );
};

export default CoursesContextProvider;
