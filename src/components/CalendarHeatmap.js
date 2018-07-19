import React, { Component } from "react";
import Week from "components/Week";
import {
  getNumberOfWeeks,
  getInitialDate,
  getFinalDate,
  getRange
} from "utils/helpers";

class CalendarHeatmap extends Component {
  render() {
    let initialDate = getInitialDate(this.props.startDate);
    let finalDate = getFinalDate(this.props.endDate);
    let weeks = getNumberOfWeeks(initialDate, finalDate);

    return (
      <svg viewBox={`0 0 ${weeks * 11} ${7 * 11}`}>
        {renderAllWeeks(weeks, initialDate)}
      </svg>
    );
  }
}

const renderAllWeeks = (weeks, initialDate) => {
  return getRange(weeks).map((_, i) => (
    <Week key={`week${i}`} x={i * 11} week={i} initialDate={initialDate} />
  ));
};

export default CalendarHeatmap;
