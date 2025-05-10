"use client";

import styled, { keyframes, css } from "styled-components";
import Image from "next/image";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const Container = styled.div<{
  $isPBJMode: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: 1;
  height: 400vh;
  margin-top: ${({ $isPBJMode }) => ($isPBJMode ? 0 : 100)}vh;
`;

const quickFlip = keyframes`
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(-1);
  }
  100% {
    transform: scaleX(1);
  }
`;

const DecorativeImage = styled(Image)<{
  $position: string;
  $flip?: boolean;
  $isStar?: boolean;
  $rotation?: number;
  $noEffects?: boolean;
}>`
  position: absolute;
  opacity: ${({ $noEffects }) => ($noEffects ? 1 : 0.4)};
  filter: ${({ $noEffects }) =>
    $noEffects ? "none" : "sepia(0.2) brightness(0.95) contrast(0.9)"};
  transform: ${({ $flip, $rotation }) =>
    `${$flip ? "scaleX(-1)" : "none"} rotate(${$rotation || 0}deg)`};
  ${({ $position }) => $position};
  transition: opacity 0.3s ease;
  /* ${({ $isStar }) =>
    $isStar &&
    css`
      animation: ${quickFlip} 5s linear infinite;
    `} */

  &:hover {
    opacity: ${({ $noEffects }) => ($noEffects ? 1 : 0.4)};
  }
`;

type Position = {
  top: number;
  left?: number;
  right?: number;
  horizontalPos?: number; // Normalized horizontal position for distance calculations
};

const generateRandomPosition = (
  existingPositions: Position[],
  isEdgePosition: boolean,
  lastType: string
): Position => {
  const MIN_SPACING = 500; // Minimum pixels between decorations
  const TYPE_SPACING = 500; // Minimum spacing between same type
  const EDGE_MARGIN = 24; // Pixels from the edge
  const VIEWPORT_WIDTH =
    typeof window !== "undefined" ? window.innerWidth : 1440; // Default to 1440 if SSR
  let position: Position;
  let attempts = 0;
  const maxAttempts = 100;

  const calculateDistance = (pos1: Position, pos2: Position): number => {
    const verticalDist = Math.abs(pos1.top - pos2.top);
    const horizontalDist = Math.abs(
      (pos1.horizontalPos || 0) - (pos2.horizontalPos || 0)
    );
    return Math.sqrt(
      Math.pow(verticalDist * 10, 2) +
        Math.pow(horizontalDist * VIEWPORT_WIDTH, 2)
    );
  };

  do {
    const top = Math.random() * 400; // 0 to 400vh
    let left: number | undefined;
    let right: number | undefined;
    let horizontalPos: number;

    if (isEdgePosition) {
      // Randomly choose left or right edge
      if (Math.random() > 0.5) {
        left = EDGE_MARGIN + (Math.random() * 20 - 10); // 14-34px from left edge
        horizontalPos = left / VIEWPORT_WIDTH;
      } else {
        right = EDGE_MARGIN + (Math.random() * 20 - 10); // 14-34px from right edge
        horizontalPos = (VIEWPORT_WIDTH - (right || 0)) / VIEWPORT_WIDTH;
      }
    } else {
      // Position along top or bottom edge
      left = 20 + Math.random() * 60; // 20-80% from left
      horizontalPos = left / 100;
    }

    position = { top, left, right, horizontalPos };

    // Check if position is far enough from ALL existing positions
    const isFarEnough = existingPositions.every((existing) => {
      const distance = calculateDistance(position, existing);
      const minSpacing = lastType === "same" ? TYPE_SPACING : MIN_SPACING;
      return distance > minSpacing;
    });

    if (isFarEnough || attempts >= maxAttempts) {
      return position;
    }

    attempts++;
  } while (true);
};

type Decoration = {
  src: string;
  size: number;
  isStar?: boolean;
  flip?: boolean;
  position?: string; // Keep as optional for initial creation
  type: string;
  rotation?: number;
};

interface Props {
  readonly numDecorations?: number;
}

// Wrap the component that uses useSearchParams in a client component
function BackgroundDecorationsContent({ numDecorations = 14 }: Props) {
  const [decorations, setDecorations] = useState<Decoration[]>([]);
  const searchParams = useSearchParams();
  const isPBJMode = searchParams.get("mode") === "pbj";
  const isJPMode = searchParams.get("mode") === "jp";

  const DECORATION_TYPES = [
    // { src: "/static-assets/decorations/heart.gif", size: 32, type: "heart" },
    {
      src: "/static-assets/decorations/star.png",
      size: 48,
      type: "star",
      isStar: true,
    },
    isJPMode
      ? { src: "/static-assets/jp/jp-cupid.png", size: 72, type: "cupid" }
      : {
          src: "/static-assets/decorations/cupid.png",
          size: 164,
          type: "cupid",
        },
    // { src: "/static-assets/decorations/stars.gif", size: 24, type: "stars" },
    // {
    //   src: "/static-assets/decorations/heart-loader-2.gif",
    //   size: 32,
    //   type: "heart2",
    // },
    // { src: "/static-assets/decorations/pbj.gif", size: 32, type: "pbj" },
  ] as const;

  useEffect(() => {
    if (isPBJMode) {
      // In PBJ mode, show multiple PBJ gifs
      const pbjPositions: Position[] = [];
      const pbjDecorations = Array.from({ length: 20 }, () => {
        const isEdgePosition = Math.random() > 0.3;
        const position = generateRandomPosition(
          pbjPositions,
          isEdgePosition,
          "different"
        );
        pbjPositions.push(position);

        const positionString = `top: ${position.top}vh; ${
          position.left
            ? `left: ${position.left}${position.left > 1 ? "px" : "%"}`
            : `right: ${position.right}px`
        };`;

        return {
          src: "/static-assets/decorations/pbj.gif",
          size: 96,
          type: "pbj",
          position: positionString,
          rotation: Math.random() * 360, // Full rotation possible for PBJ mode
          flip: Math.random() > 0.5,
        };
      });

      setDecorations(pbjDecorations);
      return;
    }

    // Regular mode - Calculate how many of each type we need
    const perType = Math.floor(numDecorations / DECORATION_TYPES.length);
    const remainder = numDecorations % DECORATION_TYPES.length;

    // Create an array with equal distribution of each type
    const baseDecorations: Decoration[] = DECORATION_TYPES.flatMap(
      (decType) => {
        const count =
          decType.type === DECORATION_TYPES[0].type
            ? perType + remainder
            : perType;
        return Array.from({ length: count }, () => ({
          ...decType,
          flip: Math.random() > 0.5,
          rotation: Math.random() * 30 - 15, // Random rotation between -15 and 15 degrees
          // Add random size for cupid
          size:
            decType.type === "cupid"
              ? Math.floor(96 + Math.random() * (172 - 72))
              : decType.size,
        }));
      }
    );

    const positions: Position[] = [];
    const decorationsWithPositions = baseDecorations.map(
      (decoration, index) => {
        const isEdgePosition = Math.random() > 0.3; // 70% chance of being on left/right edge
        const lastType =
          index > 0 && decoration.type === baseDecorations[index - 1].type
            ? "same"
            : "different";
        const position = generateRandomPosition(
          positions,
          isEdgePosition,
          lastType
        );
        positions.push(position);

        const positionString = `top: ${position.top}vh; ${
          position.left
            ? `left: ${position.left}${position.left > 1 ? "px" : "%"}`
            : `right: ${position.right}px`
        };`;

        return {
          ...decoration,
          position: positionString,
        };
      }
    );

    // Shuffle the array to mix up the decoration types
    const shuffleArray = (array: Decoration[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    setDecorations(shuffleArray(decorationsWithPositions));
  }, [isPBJMode, numDecorations]);

  return (
    <Container $isPBJMode={isPBJMode}>
      {decorations.map((decoration, index) => (
        <DecorativeImage
          key={index}
          src={decoration.src}
          alt={`Decoration ${index}`}
          width={decoration.size}
          height={decoration.size}
          $position={decoration.position || ""}
          $flip={decoration.flip}
          $isStar={decoration.type === "star"}
          $rotation={decoration.rotation}
          $noEffects={decoration.type === "pbj"}
        />
      ))}
    </Container>
  );
}

// Main component with Suspense boundary
const BackgroundDecorations = (props: Props) => {
  return (
    <Suspense fallback={<div>Loading decorations...</div>}>
      <BackgroundDecorationsContent {...props} />
    </Suspense>
  );
};

export default BackgroundDecorations;
