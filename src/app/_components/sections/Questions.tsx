"use client";

import styled from "styled-components";
import { HeaderText } from "@/app/styles";
import Image from "next/image";

// Components
import PhotoFooter from "../PhotoFooter";
import FAQ from "../FAQ";

const QuestionsContainer = styled.div`
  margin: 48px auto 0;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 110vw;
  height: 220px;
  transform: rotate(-5deg) translateX(-10vw);
  margin: auto 24px;

  @media (max-width: 768px) {
    margin-bottom: 36px;
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
    <QuestionsContainer>
      <ImageContainer>
        <Image
          alt="questions-header"
          src="/static-assets/questions-header.png"
          fill={true}
        />
      </ImageContainer>
      <HeaderText transform="false">Questions</HeaderText>
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
