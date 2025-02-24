import styled from "styled-components";
import { bigBird } from "../lib/fonts";
import DateOverlay from "./DateOverlay";

const PasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 100;

    input {
      font-family: ${bigBird.style.fontFamily};
      font-size: 1.6em;
      line-height: 1;
      color: black;
      z-index: 100;
      position: relative;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid red;
      width: 50px;
      text-align: center;

      :focus,
      :active,
      :focus-visible {
        outline-style: none;
        box-shadow: none;
        border-color: transparent;
      }
    }
  }
`;

const InnerCard = styled.div`
  font-family: ${bigBird.style.fontFamily};
  border: 2px solid black;
  width: 100%;
  box-sizing: border-box;
  padding: 64px 12px;
  position: relative;
  background-image: url("/static-assets/event-card-background.png");
  overflow: hidden;
`;

const InnerText = styled.div`
  font-size: 1.6em;
  line-height: 1;
  color: black;
  z-index: 100;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .cursor {
    font-size: 1.6em;
    animation: cursor-blink 1.5s steps(2) infinite;
    transform: translateY(2px);

    @keyframes cursor-blink {
      0% {
        opacity: 0;
      }
    }
  }
`;

const PasswordCard = ({
  isPasswordInput,
  setPassword,
}: {
  isPasswordInput?: boolean;
  setPassword?: (password: string) => void;
}) => {
  return (
    <InnerCard>
      {isPasswordInput ? (
        <PasswordContainer>
          <form>
            <InnerText>
              Password
              <span className="cursor">:</span>
            </InnerText>
            <input
              type="text"
              onChange={(e) => {
                if (setPassword) {
                  setPassword(e.target.value);
                  window.localStorage.setItem("password", e.target.value);
                }
              }}
            />
          </form>
        </PasswordContainer>
      ) : (
        <InnerText>Coco and Grant</InnerText>
      )}
      {!isPasswordInput && <DateOverlay date="9.6.25" />}
    </InnerCard>
  );
};

export default PasswordCard;
