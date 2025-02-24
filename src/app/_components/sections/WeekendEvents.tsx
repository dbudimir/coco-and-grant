"use client";

import styled from "styled-components";
import { HeaderText } from "@/app/styles";

import EventCard from "../EventCard";

const WeekendEventsContainer = styled.div`
  padding: 96px 0 24px;
`;

const WeekendEvents: React.FC = () => {
  return (
    <WeekendEventsContainer id="weekendEvents">
      <HeaderText transform="false">Weekend Events</HeaderText>
      <EventCard
        key="welcome-party"
        date="9.5.25"
        event="Welcome Party"
        location="The Caboose in Hudson, NY"
      />
      <EventCard
        key="wedding"
        date="9.6.25"
        event="Welcome Party"
        location="The Caboose in Hudson, NY"
      />
      <EventCard
        key="brunch"
        date="9.7.25"
        event="Welcome Party"
        location="The Caboose in Hudson, NY"
      />
    </WeekendEventsContainer>
  );
};

export default WeekendEvents;
