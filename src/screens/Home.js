import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import styled from "styled-components";
import "styles/calendar-heatmap.css";

import data from "utils/teste_arvore_data.json";

const CalendarWrapper = styled.div`
  margin: 20px 10%;
`;
const Title = styled.h1`
  font-size: 1.5em;
`;
const Header = styled.header`
  height: 100px;
  padding: 20px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = props => {
  /* Divide the highest 'count' in 4 sectors.
	Choose color intensity dependent on the sector the current count is in
	<25% -> really light green
	25-50% -> light green
	50-75% -> normal green
	>75% -> dark green
	Ex: maxCount = 100, so if the current count value is 40 (40% of 100), 
	the square color will be the 'light green'
	 */
  const getCountColor = (count, maxCount) => {
    let sector = maxCount / 4;
    let color = 0;
    if (count > maxCount - sector) {
      color = 4;
    } else if (count > maxCount - 2 * sector) {
      color = 3;
    } else if (count > maxCount - 3 * sector) {
      color = 2;
    } else {
      color = 1;
    }
    return color;
  };
  // Get array of 'count' from object
  let counts = data.map(_ => _.count);
  // Get maximum value of array
  let maxCount = Math.max(...counts);
  return (
    <div>
      <Header>
        <Title>Desafio Arvore</Title>
      </Header>
      <CalendarWrapper>
        <CalendarHeatmap
          startDate={new Date(data[0].date)}
          endDate={new Date(data[data.length - 1].date)}
          values={data}
          classForValue={value => {
            if (!value) {
              return "color-empty";
            }
            return `color-github-${getCountColor(value.count, maxCount)}`;
          }}
          onClick={value => {
            if (value) {
              alert(`${value.count} counts on ${value.date}`);
            }
          }}
          showOutOfRangeDays={true}
        />
      </CalendarWrapper>
    </div>
  );
};

export default Home;
