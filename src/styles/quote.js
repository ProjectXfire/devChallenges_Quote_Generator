import styled from "styled-components";
import { colors } from "../utils/colors";

export const Quote = styled.div`
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
`;

export const QuoteText = styled.p`
  border-left: 3px solid ${colors.secundary};
  padding-left: 40px;
  padding-right: 40px;
`;

export const QuoteCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 10px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 20px;

  cursor: pointer;
  & p:nth-child(1) {
    font-weight: bold;
    color: black;
  }
  & p:nth-child(2) {
    font-size: 0.8rem;
    color: ${colors.grey_dark};
  }
  & svg {
    color: white;
  }
  &:hover {
    background-color: ${colors.custom};
    & p:nth-child(1) {
      color: white;
    }
  }
`;
