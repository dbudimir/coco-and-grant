"use client";

import styled from "styled-components";
import { directorsItalic } from "../lib/fonts";

const SectionContainer = styled.div`
  max-width: 940px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px auto;
  margin-bottom: ${({ title }) => (title === "Lodging" ? "-48px" : "0")};

  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 420px;
  overflow: hidden;
  max-width: 720px;
  margin: 0 auto;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 0.75;
    filter: ${({ title }) =>
      title === "Travel" || title === "Lodging"
        ? "grayscale(1) contrast(1.5)"
        : "grayscale(1)"};
  }
`;

const TitleText = styled.h1`
  font-family: ${directorsItalic.style.fontFamily};
  font-size: 10rem;
  font-weight: 400;
  width: max-content;
  line-height: 1;
  color: #e43333;
  transform: translateY(40%);
  z-index: 1;
  width: max-content;
  padding: 0 24px;
  letter-spacing: -5px;

  &.right {
    transform: translateY(-45%);
    margin-left: auto;
  }

  @media (max-width: 600px) {
    font-size: calc(28px + 15.5vw);
    max-width: 72%;
    display: block;
    line-height: 0.75;
    text-align: center;
  }
`;

interface PhotoHeaderProps {
  title1?: string;
  title2?: string;
  images: string[];
}

const PhotoHeader = ({ title1, title2, images }: PhotoHeaderProps) => {
  return (
    <SectionContainer title={title1 ?? title2}>
      <TitleText className="left">{title1}</TitleText>
      <ImageContainer title={title1 ?? title2}>
        {images.map((image, index) => (
          <img src={image} alt={`Image ${index}`} key={index} />
          // <Image key={index} src={image} alt={`Image ${index}`} fill={true} />
        ))}
      </ImageContainer>
      <TitleText className="right">{title2}</TitleText>
    </SectionContainer>
  );
};

export default PhotoHeader;
