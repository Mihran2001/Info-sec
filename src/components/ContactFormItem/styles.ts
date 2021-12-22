import styled from "styled-components";
import { device } from "../../mediaQueries";

export const ContactsBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ItemWrapper = styled.div`
  display: flex;
`;

export const IconContactBox = styled.ul`
  width: 100%;
  display: inline-flex;
  padding-left: 10px;
  padding-top: 30px;
  margin-bottom: 20px;
  align-items: center;
  @media only screen and (${device.tabletMax}) {
    padding-top: 15px;
  }
`;

export const IconBox = styled.li`
  /* display: inline-block; */
`;
export const ContactBox = styled.li`
  display: inline-block;
  text-justify: center;
`;
