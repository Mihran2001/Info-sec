import styled from "styled-components";
export const JoinUsBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 0 0 50%;
  padding: 0 50px 0 50px;
  animation: identifier 3s ease-in;

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
  padding: 50px 80px 50px 80px;
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
