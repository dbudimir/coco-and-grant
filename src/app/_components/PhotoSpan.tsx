"use client";

import styled from "styled-components";
import Image from "next/image";

import { HeaderText } from "@/app/styles";

const ImageContainer = styled.div`
  height: 100%;
  width: 120%;
  display: flex;
  align-items: center;
  transform: translateX(-10%);
  height: 480px;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    width: 110vh;
    height: 110vh;
    object-fit: cover;
    position: unset !important;
  }
`;

interface ImageSpanProps {
  title1: string;
  image: string;
}

const PhotoHeader: React.FC<ImageSpanProps> = ({ title1, image }) => {
  return (
    <>
      <ImageContainer>
        <Image src={image} alt={`Image ${title1}`} fill={true} />
      </ImageContainer>
      <HeaderText transform="true">Our Wedding</HeaderText>
    </>
  );
};

export default PhotoHeader;
