import React from "react";
import {
  ContactsBoxWrapper,
  IconContactBox,
  IconBox,
  ContactBox,
} from "./styles";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

interface IContactItem {
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
  const breakpoint = useBreakpoint();
  return (
    <ContactsBoxWrapper>
      <IconContactBox>
        <IconBox>
          {<IconComponent style={{ verticalAlign: "middle", width: "18px" }} />}
        </IconBox>
        <ContactBox>
          <div
            style={{
              fontSize: breakpoint.lg ? "16px" : "14px",
              color: "white",
              paddingLeft: "20px",
            }}
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
              href={hrefTO ? `${hrefTO}` : `${hrefType}${contact}`}
              target="blank"
            >
              <span>{contact}</span>
            </a>
          </div>{" "}
        </ContactBox>
      </IconContactBox>
    </ContactsBoxWrapper>
  );
};

export default ContactItem;
