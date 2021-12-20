import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #050a0f;
  padding: 190px;

  &::before {
    content: " ";
    position: absolute;
    width: 253px;
    height: 253px;
    background-color: #ff0000;
    opacity: 0.8;
    filter: blur(250px);
    top: 0;
    right: 0;

    @keyframes important1 {
      0% {
        transform: translate(0);
      }
      100% {
        right: 100%;
        transform: translate(100%);
      }
    }
    animation: important1 2s ease-in forwards;
  }

  &::after {
    content: " ";
    position: absolute;
    width: 253px;
    height: 253px;
    left: 0;
    bottom: 0;
    background: #ffffff;
    filter: blur(250px);

    @keyframes important2 {
      0% {
        transform: translate(0);
      }
      100% {
        left: 100%;
        transform: translate(-100%);
      }
    }

    animation: important2 2s ease-in forwards;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const InfoSecBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  padding-top: 50px;
`;

export const LogoWrapper = styled.div``;

export const ContentBox = styled.div`
  padding: 10px;
  padding-top: 50px;
`;

export const AnimatedPart = styled.span`
  animation: changeColor 2s ease-out forwards;

  @keyframes changeColor {
    0% {
      color: white;
    }
    100% {
      color: #d42530;
    }
  }
`;
