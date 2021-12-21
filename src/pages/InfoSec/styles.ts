import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #050a0f;
  /* padding: 190px; */

  &::before {
    content: "";
    position: absolute;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-color: #ff0000;
    filter: blur(100px);
    opacity: 0.3;
    top: 0;
    right: 0;

    @keyframes important1 {
      0% {
        transform: translateX(0);
      }
      100% {
        right: 100%;
        transform: translateX(100%);
      }
    }
    animation: important1 2s ease-in forwards;
  }

  &::after {
    content: "";
    position: absolute;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    left: 0;
    bottom: 0;
    background: #ffffff;
    filter: blur(100px);
    opacity: 0.3;

    @keyframes important2 {
      0% {
        transform: translateX(0);
      }
      100% {
        left: 100%;
        transform: translateX(-100%);
      }
    }

    animation: important2 2s ease-in forwards;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
`;

export const InfoSecBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  padding-top: 50px;
  padding-left: 150px;
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

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    line-height: 1.5;
  }
`;
