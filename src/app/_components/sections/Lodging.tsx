"use client";

import styled from "styled-components";
import { bigBird } from "../../lib/fonts";

import PhotoHeader from "../PhotoHeader";

const LodgingContainer = styled.div`
  max-width: 720px;
  margin: 0 auto 48px;
  padding: 0 0 48px;

  > h1 {
    font-family: ${bigBird.style.fontFamily};
    margin: 0 auto;
    font-weight: 400;
    text-align: left;
    margin-bottom: 48px;
    padding: 0 24px;
  }

  p {
    font-family: ${bigBird.style.fontFamily};
    font-size: 24px;
    line-height: 1.5;
    max-width: 720px;
    color: #e43333;
    letter-spacing: 2.5px;
    margin: 0 auto;
    line-height: 1;
    margin-bottom: 48px;
    padding: 0 24px;

    a {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
`;

const HotelList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: ${bigBird.style.fontFamily};
  color: #e43333;
  font-size: 24px;
  max-width: 720px;
  margin: 0 auto;
  margin-bottom: 48px;
  line-height: 1.5;
  padding: 0 24px;

  a {
    text-decoration: underline;
  }
`;

const BookingNote = styled.div`
  font-size: 0.8em;
  margin-top: 4px;
  margin-left: 24px;
  color: #e43333;
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
          <a
            href="https://hotels.cloudbeds.com/reservation/VWy0rd#promo=GrantConner2025"
            target="_blank"
          >
            Little Cat Lodge
          </a>{" "}
          – Hillsdale, NY
        </span>
        <span>
          <a href="https://www.wmfarmerandsons.com/" target="_blank">
            Farmer and Sons
          </a>{" "}
          – Hudson, NY
          <BookingNote>
            Mention Coco and Grant&apos;s wedding when reaching out to book
          </BookingNote>
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
        There are{" "}
        <a
          href="https://www.airbnb.com/wishlists/v/1619796989?view_only_token=7ab98ada-e7dd-467b-97ed-1db3069321ed"
          target="_blank"
        >
          great Airbnb options
        </a>{" "}
        in Hillsdale and neighboring towns like Craryville and Copake. We
        suggest booking sooner rather than later. We would also consider renting
        a car as Ubers are not available in the area to get around.
      </p>
    </LodgingContainer>
  );
};

export default Lodging;
