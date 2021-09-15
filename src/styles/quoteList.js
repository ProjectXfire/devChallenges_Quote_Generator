import styled from "styled-components";

export const QuoteList = styled.div`
  display: grid;
  margin-top: 50px;
  margin-bottom: 50px;
  gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const QuoteTitle = styled.div`
  margin-left: 40px;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 2.5rem;
  font-weight: bold;
`;
