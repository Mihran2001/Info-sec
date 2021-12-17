import React from "react";
import { StyledParagraph } from "./styles";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  ref?: any;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
};

const Paragraph: React.FC<Props> = React.forwardRef<any>((props, ref) => (
  <StyledParagraph {...props} ref={ref} />
));

export default Paragraph;
