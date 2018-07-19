import React from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import "styles/calendar-heatmap.css";

import data from "utils/teste_arvore_data.json";
import CalendarHeatmap from "components/CalendarHeatmap";

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
  return (
    <div>
      <Header>
        <Title>Desafio Arvore</Title>
      </Header>
      <CalendarWrapper>
        <ReactTooltip />
        <CalendarHeatmap
          startDate={new Date(data[0].date)}
          endDate={new Date(data[data.length - 1].date)}
        />
      </CalendarWrapper>
    </div>
  );
};

export default Home;
