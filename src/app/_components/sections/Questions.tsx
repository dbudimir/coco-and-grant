"use client";

import styled from "styled-components";
import { HeaderText } from "@/app/styles";
import Image from "next/image";

// Components
import PhotoFooter from "../PhotoFooter";
import FAQ from "../FAQ";

const QuestionsContainer = styled.div`
  margin: 48px auto;
  padding: 0 0 48px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 110vw;
  height: 220px;
  transform: rotate(-5deg) translateX(-10vw);
  margin: 0 24px -48px;
  z-index: 0;

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

const Questions: React.FC = () => {
  return (
    <QuestionsContainer id="faq">
      <ImageContainer>
        <Image
          alt="questions-header"
          src="/static-assets/questions-header.png"
          fill={true}
        />
      </ImageContainer>
      <HeaderText
        style={{
          position: "relative",
          zIndex: 1,
          marginBottom: "72px",
        }}
      >
        Questions
      </HeaderText>
      <FAQ />
      <PhotoFooter
        images={[
          "/static-assets/header-3.JPG",
          "/static-assets/questions-1.png",
          "/static-assets/questions-2.jpg",
          "/static-assets/header-2.png",
        ]}
      />
    </QuestionsContainer>
  );
};

export default Questions;
