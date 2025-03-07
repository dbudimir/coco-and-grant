import styled from "styled-components";
import { bigBird } from "../lib/fonts";
import DateOverlay from "./DateOverlay";

import dayjs from "dayjs";
import "dayjs/locale/en";

const CardContainer = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${bigBird.style.fontFamily};
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
  font-family: ${bigBird.style.fontFamily};
`;

const InnerCard = styled.div`
  border: 8px solid black;
  border-radius: 6px;
  max-width: 300px;
  box-sizing: border-box;
  padding: 48px 12px;
  position: relative;
  background-image: url("/static-assets/event-card-background.png");
  overflow: hidden;
`;

const InnerText = styled.div`
  font-size: 1.6em;
  line-height: 1;
  color: black;
  z-index: 100;
  position: relative;
`;

const EventCard = ({
  date,
  event,
  location,
}: {
  date: string;
  event: string;
  location: string;
}) => {
  return (
    <CardContainer>
      <Title>{dayjs(date).format("dddd, MMMM D")}</Title>
      <InnerCard>
        <DateOverlay date={dayjs(date).format("M.D.YY")} />
        <InnerText>{event}</InnerText>
        <InnerText>{location}</InnerText>
      </InnerCard>
    </CardContainer>
  );
};

export default EventCard;
