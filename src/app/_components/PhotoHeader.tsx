"use client";

import styled, { keyframes } from "styled-components";
import { directorsItalic } from "../lib/fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";

const floatLeft = keyframes`
  0% {
    transform: translateX(0) translateY(40%);
  }
  50% {
    transform: translateX(-12px) translateY(40%);
  }
  100% {
    transform: translateX(0) translateY(40%);
  }
`;

const floatRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  50% {
    transform: translateX(calc(-50% + 12px));
  }
  100% {
    transform: translateX(-50%);
  }
`;

const floatLeftBottom = keyframes`
  0% {
    transform: translateX(0) translateY(-45%);
  }
  50% {
    transform: translateX(-12px) translateY(-45%);
  }
  100% {
    transform: translateX(0) translateY(-45%);
  }
`;

const SecretButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  cursor: pointer;
  z-index: 2;
  opacity: 0.5;
  height: 40px;
  width: 60px;
  top: 175px;
  right: 150px;
`;

const SectionContainer = styled.div`
  max-width: 940px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-bottom: ${({ title }) => (title === "Lodging" ? "-24px" : "48px")};
  overflow: hidden;
  position: relative;

  @media (max-width: 600px) {
    margin-bottom: 48px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 420px;
  overflow: hidden;
  max-width: 720px;
  /* position: relative; */
  left: 50% !important;
  transform: translateX(-50%) !important;
  animation: ${floatRight} 16s ease-in-out infinite;

  position: relative;

  img {
    position: absolute;
    /* left: 100% !important; */
    /* transform: translateX(-50%) !important; */
    width: 110% !important;
    max-width: 110% !important;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 0.75;
    filter: ${({ title }) =>
      title === "Lodging"
        ? "grayscale(1) contrast(1.5)"
        : title === "Travel"
        ? "none"
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
  z-index: 1;
  width: max-content;
  padding: 0 24px;
  letter-spacing: -5px;
  animation: ${floatLeft} 16s ease-in-out infinite;
  max-width: 100%;

  &.right {
    margin-left: auto;
    animation: ${floatLeftBottom} 16s ease-in-out infinite;
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
  const router = useRouter();
  const title = title1 ?? title2;

  const handlePBJMode = () => {
    router.push("/?mode=pbj");
  };

  return (
    <SectionContainer title={title}>
      <TitleText className="left">{title1}</TitleText>
      <ImageContainer title={title}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index}`} fill={true} />
        ))}
        {title === "Travel" && (
          <SecretButton onClick={handlePBJMode} aria-label="Secret Mode" />
        )}
      </ImageContainer>
      <TitleText className="right">{title2}</TitleText>
    </SectionContainer>
  );
};

export default PhotoHeader;
