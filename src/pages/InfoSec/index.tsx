import * as React from "react";
import {
  HeroSection,
  Wrapper,
  InfoSecBox,
  LogoWrapper,
  ContentBox,
} from "./styles";
import { ReactComponent as Logo } from "../../assets/svg/Logo.svg";
import StyledTitle from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import Contacts from "../../components/Contacts/index";

const InfoSec: React.FC = () => {
  return (
    <HeroSection>
      <Wrapper>
        <InfoSecBox>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <ContentBox>
            <StyledTitle level={1} style={{ fontSize: "46px" }}>
              WEBSITE IS COMING SOON
            </StyledTitle>
            <p
              style={{
                fontSize: "14px",
                color: "#7D7E81",
                paddingRight: "100px",
              }}
            >
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </ContentBox>
        </InfoSecBox>
        <Contacts></Contacts>
      </Wrapper>
    </HeroSection>
  );
};

export default InfoSec;
