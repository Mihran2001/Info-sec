import * as React from "react";
import {
  HeroSection,
  Wrapper,
  InfoSecBox,
  LogoWrapper,
  ContentBox,
  AnimatedPart,
  Footer,
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
            <div
              style={{ width: "300px", height: "80px", marginBottom: "30px" }}
            >
              <Logo style={{ height: "100%", width: "100%" }} />
            </div>
          </LogoWrapper>
          <div
            style={{ height: "1px", width: "60%", background: "#d42530" }}
          ></div>
          <ContentBox>
            <StyledTitle level={1} style={{ fontSize: "46px" }}>
              WEBSITE IS <AnimatedPart> COMING SOON </AnimatedPart>
            </StyledTitle>
            <p
              style={{
                fontSize: "14px",
                color: "#7D7E81",
                paddingRight: "100px",
                lineHeight: "1.7",
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
        <Contacts />
      </Wrapper>
      <Footer>
        <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>@2021 INFOSEC LLC</p>
      </Footer>
    </HeroSection>
  );
};

export default InfoSec;
