import React from "react";
import {
  ContactsBoxWrapper,
  IconContactBox,
  IconBox,
  ContactBox,
} from "./styles";
import { SvgIconProps } from "@material-ui/core";

interface IContactItem {
  // icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  icon?: any;
  contact?: string | number;
  hrefType?: string;
  hrefTO?: string;
}

const ContactItem: React.FC<IContactItem> = ({
  icon: IconComponent,
  contact,
  hrefType,
  hrefTO,
}) => {
  return (
    <ContactsBoxWrapper>
      <IconContactBox>
        <IconBox>
          {<IconComponent style={{ verticalAlign: "middle" }} />}
        </IconBox>
        <ContactBox>
          <p
            style={{
              fontSize: "16px",
              color: "white",
              display: "inline",
              paddingLeft: "20px",
            }}
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
              href={hrefTO ? `${hrefTO}` : `${hrefType}${contact}`}
            >
              {contact}
            </a>
          </p>{" "}
        </ContactBox>
      </IconContactBox>
    </ContactsBoxWrapper>
  );
};

export default ContactItem;
