import React from "react";
import styled, { css } from "styled-components";

type Props = {
  level: 1 | 2 | 3 | 4;
  style?: React.CSSProperties;
  color?: string;
  className?: string;
};

const Title: React.FC<Props> = (props) => {
  const { level = 1, ...restProps } = props;
  let component: string;

  component = `h${level}`;

  return React.createElement(component, restProps);
};

const StyledTitle = styled(Title)<{ $color?: string; $fontSize?: number }>`
  color: ${(props) => props.$color || "white"};
  ${({ $fontSize: fontSize }) => fontSize && css({ fontSize })}
  margin: 0;
`;

export default StyledTitle;
