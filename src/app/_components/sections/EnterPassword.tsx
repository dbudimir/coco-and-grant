"use client";

import { useEffect } from "react";

import PasswordCard from "../PasswordCard";
import styled from "styled-components";
import Typewriter from "../Typewriter";

const EnterPasswordContainer = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes fadeIn {
    100% {
      opacity: 1;
      mix-blend-mode: multiply;
    }
    0% {
      opacity: 0;
      mix-blend-mode: multiply;
    }
  }

  img {
    mix-blend-mode: multiply;
    padding: 24px;
    max-width: 100%;
  }
`;

const PasswordInputContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 8px solid black;
  border-radius: 6px;
  animation: fadeIn 2s;
  width: 100%;
  max-width: 300px;
`;

const EnterPassword = ({
  isLoaded,
  setIsLoaded,
  setPassword,
}: {
  isLoaded: boolean;
  setIsLoaded: (isLoaded: boolean) => void;
  setPassword: (password: string) => void;
}) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  });

  return (
    <EnterPasswordContainer>
      {!isLoaded ? (
        <Typewriter text="9.6.2025" typingSpeed={2500} />
      ) : (
        <PasswordInputContainer>
          <PasswordCard />
          <PasswordCard isPasswordInput setPassword={setPassword} />
        </PasswordInputContainer>
      )}
    </EnterPasswordContainer>
  );
};

export default EnterPassword;
