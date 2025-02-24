"use client";

import styled from "styled-components";
import { bigBird } from "../../lib/fonts";

import PhotoHeader from "../PhotoHeader";

const TravelContainer = styled.div`
  max-width: 940px;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  p {
    font-family: ${bigBird.style.fontFamily};
    font-size: 24px;
    line-height: 1.5;
    max-width: 540px;
    color: #e43333;
    letter-spacing: 2px;
    margin: 0 auto;
    line-height: 1;
    padding: 0 24px;
  }
`;

const WeekendEvents: React.FC = () => {
  return (
    <TravelContainer id="travel">
      <PhotoHeader title1="Travel" images={["/static-assets/travel-1.jpg"]} />
      <br />
      <p>
        For those flying in, the closest airport is Albany which is 45 mins to
        an hour from Hudson and Hillsdale. New York City area airports are
        roughly 2.5 hours from Hillsdale/Hudson. Please text or email Coco or
        Grant if you need any help or advice booking travel!
      </p>
      <div />
      <p>
        For those coming from NYC, Hudson and Hillsdale are accessible by nearby
        trains, Amtrak (Hudson) or Metro-North (Wassaic). The Hudson Amtrak stop
        is next to our Friday night event and many of the Hudson hotels so we
        highly recommend traveling Amtrak over Metro-North.
      </p>
      <div />
      <p>
        For those of you with access to cars within driving distance, we suggest
        driving up or carpooling with friends.
      </p>
    </TravelContainer>
  );
};

export default WeekendEvents;
