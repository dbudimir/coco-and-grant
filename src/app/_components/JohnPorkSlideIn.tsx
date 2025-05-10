"use client";

import { useEffect, useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%) rotate(90deg);
  }
  15% {
    transform: translateX(-5%) rotate(90deg);
  }
  20% {
    transform: translateX(0%) rotate(90deg);
  }
  25% {
    transform: translateX(-3%) rotate(85deg);
  }
  30% {
    transform: translateX(0%) rotate(90deg);
  }
  35% {
    transform: translateX(-2%) rotate(92deg);
  }
  40% {
    transform: translateX(0%) rotate(90deg);
  }
  80% {
    transform: translateX(0%) rotate(90deg);
  }
  100% {
    transform: translateX(-100%) rotate(90deg);
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%) rotate(-90deg);
  }
  15% {
    transform: translateX(5%) rotate(-90deg);
  }
  20% {
    transform: translateX(0%) rotate(-90deg);
  }
  25% {
    transform: translateX(3%) rotate(-85deg);
  }
  30% {
    transform: translateX(0%) rotate(-90deg);
  }
  35% {
    transform: translateX(2%) rotate(-92deg);
  }
  40% {
    transform: translateX(0%) rotate(-90deg);
  }
  80% {
    transform: translateX(0%) rotate(-90deg);
  }
  100% {
    transform: translateX(100%) rotate(-90deg);
  }
`;

interface JohnPorkProps {
  $isVisible: boolean;
  $direction: "left" | "right";
  $position: number;
}

const JohnPork = styled.div<JohnPorkProps>`
  position: fixed;
  z-index: 1000;
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  transform-origin: center;

  ${(props) =>
    props.$isVisible &&
    css`
      animation: ${props.$direction === "left"
          ? slideInFromLeft
          : slideInFromRight}
        5s ease-in-out;
    `}

  ${(props) => {
    if (props.$direction === "left") {
      return `
        left: 0;
        top: ${props.$position}vh;
      `;
    } else {
      return `
        right: 0;
        top: ${props.$position}vh;
      `;
    }
  }}
`;

const JohnPorkImage = styled.img`
  height: 200px;
  width: auto;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(5deg);
  }
`;

export default function JohnPorkSlideIn() {
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [position, setPosition] = useState(50);
  const animationInProgress = useRef(false);

  useEffect(() => {
    // Function to show JP slide-in
    const showJP = () => {
      // Only proceed if not already visible and no animation in progress
      if (!isVisible && !animationInProgress.current) {
        animationInProgress.current = true;

        // Randomly choose direction
        const newDirection = Math.random() > 0.5 ? "left" : "right";
        setDirection(newDirection);

        // Random position between 10% and 70% of viewport height
        const newPosition = Math.floor(Math.random() * 60) + 10;
        setPosition(newPosition);

        // Show the slide-in
        setIsVisible(true);

        // Hide after animation completes (5 seconds)
        setTimeout(() => {
          setIsVisible(false);
          // Set a small delay before allowing the next animation
          setTimeout(() => {
            animationInProgress.current = false;
          }, 1000); // 1 second cooldown between animations
        }, 5000);
      }
    };

    // Initial delay before first appearance
    const initialDelay = setTimeout(() => {
      showJP();

      // Set interval for subsequent appearances
      const interval = setInterval(() => {
        // Add some randomness to the interval
        const randomDelay = Math.random() * 5000; // 0-5 seconds of additional random delay
        setTimeout(showJP, randomDelay);
      }, 15000); // Base interval of 15 seconds

      return () => clearInterval(interval);
    }, Math.random() * 5000 + 3000); // Random initial delay between 3-8 seconds

    return () => clearTimeout(initialDelay);
  }, [isVisible]);

  return (
    <JohnPork
      $isVisible={isVisible}
      $direction={direction}
      $position={position}
    >
      <JohnPorkImage src="/static-assets/jp/jp-slide-in.png" alt="John Pork" />
    </JohnPork>
  );
}
