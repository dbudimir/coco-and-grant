"use client";

import styled from "styled-components";
import { HeaderText } from "@/app/styles";
import { bigBird } from "../../lib/fonts";

const RegistryContainer = styled.div`
  font-family: ${bigBird.style.fontFamily};
  max-width: 940px;
  margin: -48px auto 48px;
  padding: 24px 0 48px;

  p {
    font-size: 20px;
    line-height: 1.25;
    max-width: 720px;
    color: #e43333;
    letter-spacing: 2px;
    margin: 0 auto;
    line-height: 1.4;
    padding: 0 24px;
  }

  .link-container {
    text-align: center;
    margin-top: 48px;
  }

  a {
    font-size: 28px;
    color: #e43333;
    text-decoration: underline;
    font-weight: bold;

    &:hover {
      color: black;
    }
  }

  @media (max-width: 600px) {
    a {
      font-size: 24px;
    }

    p {
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
`;

const Registry: React.FC = () => {
  return (
    <RegistryContainer id="registry">
      <HeaderText style={{ marginBottom: "24px" }}>Registry</HeaderText>
      <p>
        Your presence is gift enough. For those who have kindly inquired,
        we&apos;ve put together a list of causes we care about on our Zola
        registry that you can donate to in our honor. You can also donate
        directly to the organizations we&apos;ve linked if preferred. And for
        anyone who insists on getting us a physical gift, we&apos;ve added a few
        things we love (and that fit in our Brooklyn apartment ;)
      </p>
      <div className="link-container">
        <a
          href="https://www.zola.com/registry/cocoandgrant"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Our Zola Registry
        </a>
      </div>
    </RegistryContainer>
  );
};

export default Registry;
