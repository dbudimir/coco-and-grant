"use client";

import styled from "styled-components";
import { HeaderText } from "@/app/styles";

// Components
import PhotoFooter from "../PhotoFooter";
import FAQ from "../FAQ";

const QuestionsContainer = styled.div`
  margin: 48px auto 0;
`;

const Questions: React.FC = () => {
  return (
    <QuestionsContainer>
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
