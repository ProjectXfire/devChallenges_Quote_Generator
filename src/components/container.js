import React from "react";
// Styles
import { Container as ContainerStyled } from "../styles/container";
// Components
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Container = ({ children, getRandomQuote }) => {
  return (
    <ContainerStyled>
      <Header getRandomQuote={getRandomQuote} />
      {children}
      <Footer />
    </ContainerStyled>
  );
};
