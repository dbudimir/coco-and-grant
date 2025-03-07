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
        date="9/5/25"
        event="Welcome Party"
        location="The Caboose"
        address="60 S Front St, Hudson, NY"
        mapUrl="https://maps.google.com/?q=60+S+Front+St,+Hudson,+NY"
        time="7:30PM to 10:30PM"
        attire="Festive Attire"
      />
      <EventCard
        key="wedding"
        date="9/6/25"
        event="Wedding Celebration"
        location="Taconic Ridge Farm"
        address="2846 NY-23, Hillsdale, NY"
        mapUrl="https://maps.google.com/?q=2846+NY-23,+Hillsdale,+NY"
        time="3:30PM to 10:00PM"
        attire="Cocktail Attire"
      />
      <EventCard
        key="brunch"
        date="9/7/25"
        event="Farewell Brunch"
        location="Tory Hill Farm"
        address="68 Tory Hill Farm Road, Hillsdale, NY"
        mapUrl="https://maps.google.com/?q=68+Tory+Hill+Farm+Road,+Hillsdale,+NY"
        time="11:00AM"
        attire="Casual Attire, Swimwear Welcome"
      />
    </WeekendEventsContainer>
  );
};

export default WeekendEvents;
