"use client";

import styled from "styled-components";
import Image from "next/image";

const SectionContainer = styled.div`
  padding: 64px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  height: 420px;
  width: 100%;

  @media (max-width: 768px) {
    height: 240px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  flex: 1;
  height: 100%;

  img {
    opacity: 0.75 !important;
    filter: grayscale(1) contrast(1.75) !important;
  }
`;

interface PhotoHeaderProps {
  images: string[];
}

const PhotoFooter: React.FC<PhotoHeaderProps> = ({ images }) => {
  return (
    <SectionContainer>
      <ImageContainer>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <Image
              src={image}
              alt={`Image ${index}`}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </ImageWrapper>
        ))}
      </ImageContainer>
    </SectionContainer>
  );
};

export default PhotoFooter;
