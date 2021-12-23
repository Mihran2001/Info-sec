import * as React from "react";
import {
  HeroSection,
  Wrapper,
  InfoSecBox,
  LogoWrapper,
  ContentBox,
  AnimatedPart,
  Footer,
  UnderLine,
} from "./styles";
import { ReactComponent as Logo } from "../../assets/svg/Logo.svg";
import StyledTitle from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import Contacts from "../../components/Contacts/index";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const InfoSec: React.FC = () => {
  const breakpoint = useBreakpoint();

  return (
    <HeroSection>
      <Wrapper>
        <InfoSecBox>
          <LogoWrapper>
            <div
              style={{
                width: "300px",
                height: "80px",
                marginBottom: "30px",
              }}
            >
              <Logo style={{ height: "100%", width: "100%" }} />
            </div>
          </LogoWrapper>
          <UnderLine />
          <ContentBox>
            <StyledTitle
              level={1}
              style={
                breakpoint.lg
                  ? { fontSize: "46px" }
                  : { fontSize: "35px", textAlign: "center" }
              }
            >
              WEBSITE IS <AnimatedPart> COMING SOON </AnimatedPart>
            </StyledTitle>
            <p
              style={{
                fontSize: breakpoint.lg ? "14px" : "13px",
                color: "#7D7E81",
                paddingRight: breakpoint.lg ? "100px" : "0px",
                paddingLeft: breakpoint.lg ? "0px" : "8px",
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
        <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
          {" "}
          <span style={{ fontSize: "20px" }}>©</span> 2021 INFOSEC LLC
        </p>
      </Footer>
    </HeroSection>
  );
};

export default InfoSec;
