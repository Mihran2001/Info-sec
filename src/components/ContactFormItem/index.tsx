import React from "react";
import {
  ContactsBoxWrapper,
  IconContactBox,
  IconBox,
  ContactBox,
} from "./styles";
import { SvgIconProps } from "@material-ui/core";

interface IContactItem {
  //   icon?: (props: SvgIconProps) => JSX.Element;
  icon?: any;

  contact?: string | number;
}

const ContactItem: React.FC<IContactItem> = ({ icon, contact }) => {
  return (
    <ContactsBoxWrapper>
      <IconContactBox>
        {/* <IconBox>{icon}</IconBox> */}
        <ContactBox>
          <p
            style={{
              fontSize: "16px",
              color: "white",
              display: "inline",
              paddingLeft: "20px",
            }}
          >
            {contact}
          </p>{" "}
        </ContactBox>
      </IconContactBox>
    </ContactsBoxWrapper>
  );
};

export default ContactItem;
