"use client";

import styled from "styled-components";
import { bigBird } from "../../lib/fonts";

import PhotoHeader from "../PhotoHeader";

const TravelContainer = styled.div`
  max-width: 720px;
  margin: 0 auto 48px;
  padding: 0 0 48px;
  position: relative;

  p {
    font-family: ${bigBird.style.fontFamily};
    font-size: 20px;
    line-height: 1.25;
    max-width: 720px;
    color: #e43333;
    letter-spacing: 2px;
    margin: 0 auto;
    line-height: 1.4;
    padding: 0 24px;
  }
`;

const SectionHeader = styled.h2`
  font-family: ${bigBird.style.fontFamily};
  font-size: 28px;
  font-weight: 400;
  color: black;
  margin: 0 auto;
  max-width: 720px;
  padding: 0 24px;
  margin-top: 24px;
  margin-bottom: 12px;
  text-align: center;
`;

const IconPlane = styled.svg`
  position: absolute;
  right: 40px;
  top: 800px;
  width: 100px;
  height: 100px;
  opacity: 0.15;
  transform: rotate(-45deg);

  @media (max-width: 940px) {
    right: 20px;
    width: 80px;
    height: 80px;
    top: 600px;
  }
`;

const IconCar = styled.svg`
  position: absolute;
  left: 60px;
  bottom: 120px;
  width: 70px;
  height: 70px;
  opacity: 0.15;
  transform: rotate(15deg);

  @media (max-width: 940px) {
    left: 20px;
    width: 60px;
    height: 60px;
    bottom: 80px;
  }
`;

const WeekendEvents: React.FC = () => {
  return (
    <TravelContainer id="travel">
      <PhotoHeader title1="Travel" images={["/static-assets/travel-1.jpg"]} />
      {/* <IconPlane viewBox="0 0 46.876 46.876" fill="#e43333">
        <path
          d="M26.602,24.568l15.401,6.072l-0.389-4.902c-10.271-7.182-9.066-6.481-14.984-10.615V2.681
          c0-1.809-1.604-2.701-3.191-2.681c-1.587-0.021-3.19,0.872-3.19,2.681v12.44c-5.918,4.134-4.714,3.434-14.985,10.615l-0.39,4.903
          l15.401-6.072c0,0-0.042,15.343-0.006,15.581l-5.511,3.771v2.957l7.044-2.427h3.271l7.046,2.427V43.92l-5.513-3.771
          C26.644,39.909,26.602,24.568,26.602,24.568z"
        />
      </IconPlane>
      <IconCar viewBox="0 0 16 16" fill="#e43333">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 1L1.66667 5H0V8H1V15H3V13H13V15H15V8H16V5H14.3333L13 1H3ZM4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9ZM11.5585 3H4.44152L3.10819 7H12.8918L11.5585 3ZM12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9Z"
        />
      </IconCar> */}
      <SectionHeader>Air Travel</SectionHeader>
      <p>
        For those flying in, the closest airport is Albany which is 45 mins to
        an hour from Hudson and Hillsdale. New York City area airports are
        roughly 2.5 hours from Hillsdale/Hudson. Please text or email Coco or
        Grant if you need any help or advice booking travel!
      </p>
      <SectionHeader>Ground Transportation</SectionHeader>
      <p>
        For those coming from NYC, Hudson and Hillsdale are accessible by nearby
        trains, Amtrak (Hudson) or Metro-North (Wassaic). The Hudson Amtrak stop
        is next to our Friday night event and many of the Hudson hotels so we
        highly recommend traveling Amtrak over Metro-North.
      </p>
      <p>
        For those of you with access to cars within driving distance, we suggest
        driving up or carpooling with friends.
      </p>
      <SectionHeader>Wedding Weekend Transportation</SectionHeader>
      <p>
        Transportation/shuttles during the wedding weekend will be provided
        between Hillsdale and Hudson. Stay tuned for details.
      </p>
    </TravelContainer>
  );
};

export default WeekendEvents;
