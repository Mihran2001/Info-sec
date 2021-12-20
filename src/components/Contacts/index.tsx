import React from "react";
import { JoinUsBoxWrapper, TitleWrapper, JoinUsBox } from "./styles";
import StyledTitle from "../../components/Title";
import ContactItem from "../../components/ContactFormItem/index";
import { contactsData } from "./icons";

const Contacts: React.FC = () => {
  return (
    <JoinUsBoxWrapper>
      <JoinUsBox>
        <TitleWrapper>
          <StyledTitle level={1} style={{ fontSize: "36px" }}>
            You can join us!
          </StyledTitle>
        </TitleWrapper>
        {contactsData.map((item, index) => (
          <ContactItem
            icon={item.icon}
            contact={item.content}
            hrefType={item.hrefType}
            hrefTO={item.hrefTO}
            key={index}
          />
        ))}
      </JoinUsBox>
    </JoinUsBoxWrapper>
  );
};

export default Contacts;
