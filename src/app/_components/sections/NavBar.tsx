"use client";

import styled from "styled-components";
import { bigBird } from "../../lib/fonts";
import Link from "next/link";

const NavBarContainer = styled.div`
  font-family: ${bigBird.style.fontFamily};
  max-width: 940px;
  margin: 0 auto;
  padding: 48px 24px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-bottom: 48px;
  }

  a {
    font-family: ${bigBird.style.fontFamily};
    font-size: 2em;
    font-weight: 400;
    text-align: right;
    width: max-content;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: #e43333;
    }
  }
`;

const About: React.FC = () => {
  return (
    <NavBarContainer>
      <Link href="/#weekendEvents">EVENTS</Link>
      <Link href="/#travel">TRAVEL</Link>
      <Link href="/#lodging">LODGING</Link>
    </NavBarContainer>
  );
};

export default About;
