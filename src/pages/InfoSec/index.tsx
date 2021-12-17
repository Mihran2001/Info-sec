import * as React from "react";
import {
  HeroSection,
  Wrapper,
  InfoSecBox,
  JoinUsBox,
  LogoWrapper,
  ContentBox,
  TitleWrapper,
  ContactsForm,
} from "./styles";
import { ReactComponent as Logo } from "../../assets/svg/Logo.svg";
import StyledTitle from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import { Form, Input, InputNumber, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const InfoSec: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
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
        <JoinUsBox>
          <TitleWrapper>
            <StyledTitle level={1} style={{ fontSize: "36px" }}>
              You can join us!
            </StyledTitle>
          </TitleWrapper>
          <ContactsForm></ContactsForm>
        </JoinUsBox>
      </Wrapper>
    </HeroSection>
  );
};

export default InfoSec;
