import styled, { keyframes, css } from "styled-components";

const dualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const dualRingAnimation = css`
  animation: ${dualRing} 1.2s linear infinite;
`;

export const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
    ${dualRingAnimation}
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
`;
