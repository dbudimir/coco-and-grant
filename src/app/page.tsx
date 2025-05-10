"use client";

import { useEffect, useState, Suspense } from "react";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";

import EnterPassword from "./_components/sections/EnterPassword";
import Overview from "./_components/sections/Overview";
import About from "./_components/sections/About";
import NavBar from "./_components/sections/NavBar";
import Location from "./_components/sections/Location";
import WeekendEvents from "./_components/sections/WeekendEvents";
import Travel from "./_components/sections/Travel";
import Lodging from "./_components/sections/Lodging";
import Questions from "./_components/sections/Questions";
import BackgroundDecorations from "./_components/BackgroundDecorations";
import JohnPorkSlideIn from "./_components/JohnPorkSlideIn";

const PageContainer = styled.div`
  height: unset;
  overflow: visible;

  &.hidden {
    height: 0px;
    overflow: hidden;
  }
`;

// Client component that uses useSearchParams
function HomeContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const searchParams = useSearchParams();
  const isPBJMode = searchParams.get("mode") === "pbj";
  const isJPMode = searchParams.get("mode") === "jp";

  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      const localStoragePassword = window.localStorage.getItem("password");
      const isValid =
        localStoragePassword === "<3" ||
        password === "<3" ||
        isPBJMode ||
        isJPMode;

      setPasswordIsValid(isValid);

      if (isValid) {
        // @ts-expect-error - blur is a valid method
        document.activeElement?.blur();
        const element = document.getElementById(`content`);
        element?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }, [isLoaded, password, passwordIsValid, isPBJMode]);

  // Skip password screen if in PBJ mode
  useEffect(() => {
    if (isPBJMode) {
      setIsLoaded(true);
      setPasswordIsValid(true);
    }
  }, [isPBJMode]);

  return (
    <main>
      {!isPBJMode && (
        <EnterPassword
          setPassword={setPassword}
          setIsLoaded={setIsLoaded}
          isLoaded={isLoaded}
        />
      )}

      <PageContainer
        id="content"
        className={passwordIsValid ? "content" : "content hidden"}
      >
        {passwordIsValid && <BackgroundDecorations />}
        {passwordIsValid && isJPMode && <JohnPorkSlideIn />}
        <Overview />
        <About />
        <NavBar />
        <Location />
        <WeekendEvents />
        <Travel />
        <Lodging />
        <Questions />
      </PageContainer>
    </main>
  );
}

// Main component with Suspense boundary
export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
