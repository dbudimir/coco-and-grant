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
  position: relative;

  .booking-note-star {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-10px) translateY(-6px);
    font-size: 1.5em;
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
        you will have walking access to many great restaurants and shops and the
        Friday night venue. There will also be busses to the Saturday and Sunday
        events.
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
          <BookingNote>
            Use the link above to book with our block by June 5th.
          </BookingNote>
        </span>
        <span>
          <a href="https://www.wmfarmerandsons.com/" target="_blank">
            Farmer and Sons
          </a>{" "}
          – Hudson, NY
          <BookingNote>
            Email/call to book, mention Coco and Grant&apos;s wedding block
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
          <a href="https://www.theprospectberkshires.com/" target="_blank">
            Prospect Lake Cabins
          </a>{" "}
          – Egremont, MA
        </span>
        <span>
          <a href="https://hudsonwhaler.com/" target="_blank">
            Hudson Whaler
          </a>{" "}
          – Hudson, NY
        </span>
        <span>
          <a href="https://hudsonnavigator.com/" target="_blank">
            Hudson Navigator
          </a>{" "}
          – Hudson, NY
        </span>
        <span>
          <a href="https://theameliahudson.com/" target="_blank">
            The Amelia
          </a>{" "}
          – Hudson, NY
        </span>
        <span>
          <a href="https://www.howardhotel.net/" target="_blank">
            The Howard Hotel
          </a>{" "}
          – Hudson, NY
        </span>
        <BookingNote>
          <span className="booking-note-star">*</span>
          We plan to have buses running to and from Little Cat Lodge, Farmer and
          Sons, Hudson Whaler, The Howard Hotel, and The Alander. Please reach
          out to{" "}
          <a
            href="mailto:grantandcoco@gmail.com"
            style={{ textDecoration: "underline" }}
          >
            grantandcoco@gmail.com
          </a>{" "}
          if you have any questions.
        </BookingNote>
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
