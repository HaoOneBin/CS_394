import React, { useState, useEffect } from "react";
import {
  hasConflict,
  meetsPat,
  timeParts,
  mapValues,
  addCourseTimes,
  addScheduleTimes,
  days,
  daysOverlap,
  hoursOverlap,
  timeConflict,
  courseConflict,
  terms,
  getCourseNumber,
  getCourseTerm,
} from "../utilities/times.js";

const toggle = (x, lst) =>
  lst.includes(x) ? lst.filter((y) => y !== x) : [x, ...lst];

const Course = ({ course, selected, setSelected }) => {
  const isSelected = selected.includes(course);
  const isDisabled = !isSelected && hasConflict(course, selected);
  const style = {
    backgroundColor: isDisabled
      ? "lightgrey"
      : isSelected
      ? "lightgreen"
      : "white",
  };
  return (
    <div
      className="card m-1 p-2"
      style={style}
      onClick={isDisabled ? null : () => setSelected(toggle(course, selected))}
    >
      <div className="card-body">
        <div className="card-title">
          {getCourseTerm(course)} CS {getCourseNumber(course)}
        </div>
        <div className="card-text">{course.title}</div>
        <div className="card-text">{course.meets}</div>
      </div>
    </div>
  );
};

export default Course;