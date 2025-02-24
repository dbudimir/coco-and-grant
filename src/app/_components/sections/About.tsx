"use client";

import styled from "styled-components";
import { bigBird } from "../../lib/fonts";

const AboutContainer = styled.div`
  font-family: ${bigBird.style.fontFamily};
  max-width: 940px;
  margin: 0 auto;
  padding: 48px 24px;

  h1 {
    font-family: ${bigBird.style.fontFamily};
    margin: 0 auto;
    font-weight: 400;
    text-align: right;
    margin-bottom: 64px;
  }

  p {
    font-size: 24px;
    line-height: 1.5;
    max-width: 540px;
    color: #e43333;
    letter-spacing: 3px;
    margin: 0 auto;
    line-height: 1;
  }
`;

const About = () => {
  return (
    <>
      <AboutContainer>
        <h1>September 5-7, 2025</h1>
        <p>
          We&apos;re thrilled to invite you to a weekend of love and celebration
          in the Hudson Valley. While final details are all being sorted, we
          hope this site provides helpful information as you make travel plans.
        </p>
      </AboutContainer>
    </>
  );
};

export default About;
