"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

import EnterPassword from "./_components/sections/EnterPassword";
import Overview from "./_components/sections/Overview";
import About from "./_components/sections/About";
import NavBar from "./_components/sections/NavBar";
import Location from "./_components/sections/Location";
import WeekendEvents from "./_components/sections/WeekendEvents";
import Travel from "./_components/sections/Travel";
import Lodging from "./_components/sections/Lodging";
import Questions from "./_components/sections/Questions";

const PageContainer = styled.div`
  height: unset;
  overflow: visible;

  &.hidden {
    height: 0px;
    overflow: hidden;
  }
`;

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  useEffect(() => {
    console.log(password);
    if (isLoaded && typeof window !== "undefined") {
      const localStoragePassword = window.localStorage.getItem("password");
      const isValid = localStoragePassword === "<3" || password === "<3";

      setPasswordIsValid(isValid);

      if (isValid) {
        // @ts-expect-error - blur is a valid method
        document.activeElement.blur();
        const element = document.getElementById(`content`);
        // @ts-expect-error - scrollIntoView is a valid method
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }, [isLoaded, password, passwordIsValid]);

  return (
    <main>
      <EnterPassword
        setPassword={setPassword}
        setIsLoaded={setIsLoaded}
        isLoaded={isLoaded}
      />

      <PageContainer
        id="content"
        className={passwordIsValid ? "content" : "content hidden"}
      >
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
