import { useEffect, useState } from "react";
import { directorsItalic } from "../lib/fonts";
import styled from "styled-components";

const DateOverlayContainer = styled.div<{
  bottom?: string;
  right?: string;
  transform?: string;
}>`
  position: absolute;
  font-size: 3.5rem;
  color: #e43333;
  font-family: cursive;
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  transform: ${({ transform }) => transform};
  font-family: ${directorsItalic.style.fontFamily};
  z-index: 0;
  opacity: 0.65;
  width: 100%;
`;

const DateOverlay = ({ date }: { date: string }) => {
  const [randomPosition, setRandomPosition] = useState({
    bottom: "0px",
    right: "0px",
    transform: "rotate(0deg)",
  });

  useEffect(() => {
    const randomBottom = Math.floor(Math.random() * 20) - 20; // Random between -10 and 9
    const randomRight = Math.floor(Math.random() * 100); // Random between 0 and 19
    const randomRotation = Math.floor(Math.random() * 61) - 30; // Random between -10 and 9

    setRandomPosition({
      bottom: `${randomBottom}px`,
      right: `${randomRight}px`,
      transform: `rotate(${randomRotation}deg)`,
    });
  }, []);

  return (
    <DateOverlayContainer
      bottom={randomPosition.bottom}
      right={randomPosition.right}
      transform={randomPosition.transform}
    >
      {date}
    </DateOverlayContainer>
  );
};

export default DateOverlay;
