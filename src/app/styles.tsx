import styled from "styled-components";
import { directorsItalic } from "./lib/fonts";

export const HeaderText = styled.h1<{ transform?: string }>`
  font-family: ${directorsItalic.style.fontFamily};
  font-size: 10rem;
  margin: 0 auto;
  font-weight: 400;
  width: max-content;
  transform: ${({ transform }) => (transform ? "translateY(-35%)" : "none")};
  line-height: 1;
  color: #e43333;
  letter-spacing: -5px;

  @media (max-width: 1200px) {
    font-size: calc(24px + 15vw);
  }

  @media (max-width: 600px) {
    font-size: calc(28px + 15.5vw);
    transform: ${({ transform }) => (transform ? "translateY(-50%)" : "none")};
    max-width: 72%;
    display: block;
    line-height: 0.75;
    text-align: center;
  }
`;
