import React, { Component } from "react";
import { SQUARE_SIZE } from "utils/constants";
import styled from "styled-components";
import data from "utils/teste_arvore_data.json";
import { getCountColor } from "utils/helpers";
import moment from "moment";

const Rect = styled.rect`
  :hover {
    stroke: #000;
  }
  fill: #${props => {
      switch (props.count) {
        case 1:
          return `d6e685`;
        case 2:
          return `8cc665`;
        case 3:
          return `44a340`;
        case 4:
          return `1e6823`;
        default:
          return `eee`;
      }
    }};
`;

class Day extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    let filtered = data.filter(_ => {
      let arrayDate = new Date(_.date);
      return (
		// Format date in DD/MM/YYYY and compare one to another
		// It will be 'true' no matter the time of the day
        moment(arrayDate).format("L") ===
        moment(this.props.currentDate).format("L")
      );
	});
	// If currentDate is a match, uptade the count from the json data given
    this.setState({
      count: filtered.length > 0 ? filtered[0].count : 0
    });
  }

  render() {
    const { currentDate, x, y } = this.props;
    // Get array of 'count' from object
    let counts = data.map(_ => _.count);
    // Return maximum value of array
    let maxCount = Math.max(...counts);

    return (
      <Rect
        data-tip={`Count: ${this.state.count} in ${currentDate}`}
        count={getCountColor(this.state.count, maxCount)}
        width={SQUARE_SIZE}
        height={SQUARE_SIZE}
        x={x}
        y={y}
        onClick={() => alert(currentDate)}
      />
    );
  }
}

export default Day;
