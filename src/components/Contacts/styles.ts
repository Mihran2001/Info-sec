import styled from "styled-components";
import { device } from "../../mediaQueries";

export const JoinUsBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 0 0 50%;
  padding: 0 50px 0 50px;
  animation: identifier 3s ease-in;

  @media only screen and (${device.tabletMax}) {
    padding: 0 20px 0 20px;
    margin-bottom: 120px;
  }

  @keyframes identifier {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const JoinUsBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #05090e;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 40px 80px 50px 80px;

  @media only screen and (${device.tabletMax}) {
    padding: 20px 30px 20px 30px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

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
  display: inline;
  padding-left: 10px;
  padding-top: 50px;
  margin-bottom: 20px;
`;

export const IconBox = styled.li`
  display: inline;
`;

export const ContactBox = styled.li`
  display: inline;
  text-justify: center;
`;
