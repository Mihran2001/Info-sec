// import React from "react";
// import { ItemWrapper, IconContactBox, IconBox, ContactBox } from "./styles";
// import { SvgIconProps } from "@material-ui/core";

// interface IContactItem {
//   icon: (props: SvgIconProps) => JSX.Element;
//   contact: string | number;
// }

// const ContactItem: React.FC<IContactItem> = ({ icon, contact }) => {
//   return (
//     <ItemWrapper>
//       <IconContactBox>
//         <IconBox> {icon} </IconBox>
//         <ContactBox> {contact} </ContactBox>
//       </IconContactBox>
//     </ItemWrapper>
//   );
// };

// export default ContactItem;

import React from "react";
import { ItemWrapper, IconContactBox, IconBox, ContactBox } from "./styles";
import { SvgIconProps } from "@material-ui/core";

const ContactItem: React.FC = () => {
  return (
    <ItemWrapper>
      <IconContactBox>
        <IconBox> </IconBox>
        <ContactBox> </ContactBox>
      </IconContactBox>
    </ItemWrapper>
  );
};

export default ContactItem;
