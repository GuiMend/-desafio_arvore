import React from "react";
import Day from "components/Day";
import { DAYS_IN_WEEK } from "utils/constants";
import { getRange, getCurrentDate } from "utils/helpers";

const Week = ({ week, initialDate, x }) => {
  // Renders all days in a week, from Sunday to Saturday
  return getRange(DAYS_IN_WEEK).map((_, index) => (
    <Day
      currentDate={getCurrentDate(initialDate, week * 7 + index)}
      key={index}
      x={x}
      y={index * 11}
    />
  ));
};

export default Week;
