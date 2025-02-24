"use client";

import styled from "styled-components";
import { bigBird } from "../../lib/fonts";

import PhotoHeader from "../PhotoHeader";

const LodgingContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 0;

  > h1 {
    font-family: ${bigBird.style.fontFamily};
    margin: 0 auto;
    font-weight: 400;
    text-align: left;
    margin-bottom: 64px;
    padding: 0 24px;
  }

  p {
    font-family: ${bigBird.style.fontFamily};
    font-size: 24px;
    line-height: 1.5;
    max-width: 540px;
    color: #e43333;
    letter-spacing: 2.5px;
    margin: 0 auto;
    line-height: 1;
    margin-bottom: 64px;
    padding: 0 24px;
  }
`;

const HotelList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: ${bigBird.style.fontFamily};
  color: #e43333;
  font-size: 24px;
  max-width: 540px;
  margin: 0 auto;
  margin-bottom: 64px;
  line-height: 1.5;
  padding: 0 24px;

  a {
    text-decoration: underline;
  }
`;

const Lodging: React.FC = () => {
  return (
    <LodgingContainer id="lodging">
      <PhotoHeader
        title2="Lodging"
        images={["/static-assets/accommodations-1.JPG"]}
      />
      <p>
        Hudson and Hillsdale are surrounded by many boutique hotels and Airbnbs.
        Here is a list of options that we recommend exploring. For those
        planning to take the train, we recommend you stay in Hudson, NY where
        you will have walking access to many great restaurants and shops and bus
        service to the wedding venue on Saturday.
      </p>
      <h1>Hotels</h1>
      <HotelList>
        <span>
          <a href="https://www.littlecatlodge.com/" target="_blank">
            Little Cat Lodge
          </a>{" "}
          – Hillsdale, NY
        </span>
        <span>
          <a href="https://www.wmfarmerandsons.com/" target="_blank">
            Farmer and Sons
          </a>{" "}
          – Hudson, NY
        </span>
        <span>
          <a href="https://www.thealander.com/" target="_blank">
            The Alander
          </a>{" "}
          – Copake, NY
        </span>
        <span>
          <a
            href="https://catamountski.com/plan/on-site-lodging"
            target="_blank"
          >
            Catamount Mountain Resort
          </a>
          – Hillsdale NY
        </span>
        <span>
          <a href="https://www.thewickhotel.com/" target="_blank">
            The Wick
          </a>{" "}
          – Hudson, NY
        </span>
      </HotelList>
      <h1>Airbnbs</h1>
      <p>
        There are great Airbnb options in Hillsdale and neighboring towns like
        Craryville and Copake. we suggest booking sooner rather than later. We
        would also consider renting a car as Ubers are not available in the area
        to get around. we will share a list of cab companies in the area as we
        get closer to the date.
      </p>
    </LodgingContainer>
  );
};

export default Lodging;
