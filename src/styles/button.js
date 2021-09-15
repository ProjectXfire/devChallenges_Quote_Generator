import styled, { keyframes, css } from "styled-components";
import { colors } from "../utils/colors";

const rotateIcon = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const animationIcon = css`
  animation: ${rotateIcon} 0.2s linear infinite;
`;

export const Button = styled.button`
  display: flex;
  border: none;
  background-color: white;
  font-family: "Glory", sans-serif;
  cursor: pointer;
  & svg {
    margin-left: 5px;
  }
  &:hover {
    color: ${colors.primary};
  }
  &:active {
    & svg {
      ${animationIcon}
    }
  }
`;
