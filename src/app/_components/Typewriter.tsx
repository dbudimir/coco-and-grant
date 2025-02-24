import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { bigBird } from "../lib/fonts";

const blinkAnimation = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const TypewriterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: start;
`;

const TypewriterText = styled.span`
  font-family: ${bigBird.style.fontFamily};
  display: flex;
  color: #e43333;
  font-size: 1.6em;
  width: 120px;
  align-items: center;
`;

const Cursor = styled.span`
  display: inline-block;
  animation: ${blinkAnimation} 1s infinite step-end;
  color: #e43333;
  font-size: 0.8em;
`;

const Typewriter = ({
  text,
  typingSpeed,
}: {
  text: string;
  typingSpeed: number;
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const charDelay = useRef(0);

  useEffect(() => {
    charDelay.current = text.length > 0 ? typingSpeed / text.length : 0;
  }, [text, typingSpeed]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (textIndex < text.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[textIndex]);
        setTextIndex((prevIndex) => prevIndex + 1);
      }, charDelay.current);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, text, typingSpeed]);

  return (
    <TypewriterContainer>
      <TypewriterText>
        {displayedText}
        <Cursor>|</Cursor>
      </TypewriterText>
    </TypewriterContainer>
  );
};

export default Typewriter;
