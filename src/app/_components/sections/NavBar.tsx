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

const slideDownAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
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

  @media (max-width: 768px) and (min-width: 600px) {
    font-size: 1.5em;
  }

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

const StickyLink = styled(Link)`
  font-family: ${bigBird.style.fontFamily};
  font-size: 1.5em;
  font-weight: 400;
  color: black;
  text-decoration: none;
  padding: 8px 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #e43333;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    font-size: 1.2em;
    padding: 6px 12px;
  }
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

const StickyNavBar = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px 0;
  z-index: 1000;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  justify-content: center;
  gap: 32px;
  animation: ${(props) => props.$isVisible && slideDownAnimation} 0.3s ease-out;

  @media (max-width: 600px) {
    gap: 16px;
    padding: 8px 0;
  }
`;

const NavBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        // Only show sticky navbar when regular navbar is completely out of view
        // AND we have scrolled past it (not above it)
        const rect = entry.boundingClientRect;
        const hasScrolledBelowNavbar = rect.bottom < 0;

        if (hasScrolledBelowNavbar) {
          setHasScrolledPast(true);
        }

        setIsSticky(!entry.isIntersecting && hasScrolledPast);

        if (entry.isIntersecting) {
          setShouldBounce(true);
          // Reset bounce animation after it completes
          const timeout = setTimeout(() => {
            setShouldBounce(false);
          }, 2000); // Adjust this value based on total animation duration
          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0 }
    );

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => observer.disconnect();
  }, [hasScrolledPast]);

  return (
    <>
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
          href="/#registry"
          $isVisible={isVisible}
          $index={3}
          $shouldBounce={shouldBounce}
        >
          REGISTRY
        </AnimatedLink>
        <AnimatedLink
          href="/#faq"
          $isVisible={isVisible}
          $index={4}
          $shouldBounce={shouldBounce}
        >
          FAQ
        </AnimatedLink>
        <AnimatedLink
          href="https://www.zola.com/wedding/cocoandgrant/rsvp"
          target="_blank"
          rel="noopener noreferrer"
          $isVisible={isVisible}
          $index={5}
          $shouldBounce={shouldBounce}
        >
          RSVP
        </AnimatedLink>
      </NavBarContainer>

      <StickyNavBar $isVisible={isSticky}>
        <StickyLink href="/#faq">FAQ</StickyLink>
        <StickyLink
          href="https://www.zola.com/wedding/cocoandgrant/rsvp"
          target="_blank"
          rel="noopener noreferrer"
        >
          RSVP
        </StickyLink>
      </StickyNavBar>
    </>
  );
};

export default NavBar;
