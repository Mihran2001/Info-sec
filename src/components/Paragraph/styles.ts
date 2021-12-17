import styled from "styled-components";

export const StyledParagraph = styled.p<{ $color?: string }>`
  color: ${(props) => props.$color || props.theme.colors.white};
  margin: 0;
`;
