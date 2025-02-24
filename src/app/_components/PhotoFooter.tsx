"use client";

import styled from "styled-components";

const SectionContainer = styled.div`
  padding: 64px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  /* height: 420px; */
  overflow: hidden;
  position: relative;

  img {
    height: 420px;
    opacity: 0.75;
    filter: grayscale(1) contrast(1.75);
  }

  @media (max-width: 768px) {
    img {
      height: 240px;
    }
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
          <img src={image} alt={`Image ${index}`} key={index} />
          // <Image key={index} src={image} alt={`Image ${index}`} fill={true} />
        ))}
      </ImageContainer>
    </SectionContainer>
  );
};

export default PhotoFooter;
