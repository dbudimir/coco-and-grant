"use client";

import styled, { keyframes, css } from "styled-components";
import { bigBird } from "../../lib/fonts";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-12px);
  }
  80% {
    transform: translateY(-5px);
  }
`;

const AnimatedLink = styled(Link)<{
  $isVisible: boolean;
  $index: number;
  $shouldBounce: boolean;
}>`
  font-family: ${bigBird.style.fontFamily};
  font-size: 2em;
  font-weight: 400;
  text-align: right;
  width: max-content;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.$isVisible ? 0 : "10px")});
  transition: opacity 0.3s ease, transform 0.3s ease;
  color: black;

  &:hover {
    color: #e43333;
    text-decoration: underline;
  }

  ${(props) =>
    props.$shouldBounce &&
    css`
      animation: ${bounceAnimation} 0.6s ease-in-out;
      animation-delay: ${0.5 + props.$index * 0.2}s;
    `}
`;

const NavBarContainer = styled.div`
  font-family: ${bigBird.style.fontFamily};
  max-width: 940px;
  margin: 0 auto;
  padding: 48px 24px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-bottom: 48px;
  }
`;

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setShouldBounce(true);
          // Reset bounce animation after it completes
          const timeout = setTimeout(() => {
            setShouldBounce(false);
          }, 2000); // Adjust this value based on total animation duration
          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.1 }
    );

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <NavBarContainer ref={navRef}>
      <AnimatedLink
        href="/#weekendEvents"
        $isVisible={isVisible}
        $index={0}
        $shouldBounce={shouldBounce}
      >
        EVENTS
      </AnimatedLink>
      <AnimatedLink
        href="/#travel"
        $isVisible={isVisible}
        $index={1}
        $shouldBounce={shouldBounce}
      >
        TRAVEL
      </AnimatedLink>
      <AnimatedLink
        href="/#lodging"
        $isVisible={isVisible}
        $index={2}
        $shouldBounce={shouldBounce}
      >
        LODGING
      </AnimatedLink>
      <AnimatedLink
        href="/#faq"
        $isVisible={isVisible}
        $index={3}
        $shouldBounce={shouldBounce}
      >
        FAQ
      </AnimatedLink>
      <AnimatedLink
        href="https://www.zola.com/wedding/cocoandgrant/rsvp"
        target="_blank"
        rel="noopener noreferrer"
        $isVisible={isVisible}
        $index={4}
        $shouldBounce={shouldBounce}
      >
        RSVP
      </AnimatedLink>
    </NavBarContainer>
  );
};

export default About;
