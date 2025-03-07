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
  min-width: 300px;
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
  width: 300px;
  box-sizing: border-box;
  padding: 0 12px;
  height: 220px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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

const TimeText = styled(InnerText)`
  font-size: 1.2em;
  margin-top: 12px;
`;

const AttireText = styled(InnerText)`
  font-size: 1em;
  margin-top: 12px;
  font-style: italic;
`;

const AddressText = styled.a`
  font-size: 1.2em;
  color: #666;
  margin-top: 12px;
  font-style: italic;
  width: 300px;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
    color: #888;
  }
`;

const EventCard = ({
  date,
  event,
  location,
  address,
  mapUrl,
  time,
  attire,
}: {
  date: string;
  event: string;
  location: string;
  address: string;
  mapUrl: string;
  time?: string;
  attire?: string;
}) => {
  return (
    <CardContainer>
      <Title>{dayjs(date).format("dddd, MMMM D")}</Title>
      <InnerCard>
        <DateOverlay date={dayjs(date).format("M.D.YY")} />
        <InnerText>{event}</InnerText>
        <TimeText>{location}</TimeText>
        {time && <TimeText>{time}</TimeText>}
        {attire && <AttireText>{attire}</AttireText>}
      </InnerCard>
      <AddressText href={mapUrl} target="_blank" rel="noopener noreferrer">
        {address}
      </AddressText>
    </CardContainer>
  );
};

export default EventCard;
