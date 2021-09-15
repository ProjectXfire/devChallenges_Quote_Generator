import React from "react";
// Providers
import { IoArrowForwardCircleSharp } from "react-icons/io5";
// Styles
import { Quote as QuoteStyled, QuoteText, QuoteCard } from "../styles/quote";
// Components
import { Loading } from "./loading";

export const Quote = ({ randomQuote, loading, getQuotesByAuthor }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <QuoteStyled>
          <QuoteText>{randomQuote.quoteText}</QuoteText>
          <QuoteCard onClick={() => getQuotesByAuthor(randomQuote.quoteAuthor)}>
            <div>
              <p>{randomQuote.quoteAuthor}</p>
              <p>{randomQuote.quoteGenre}</p>
            </div>
            <IoArrowForwardCircleSharp />
          </QuoteCard>
        </QuoteStyled>
      )}
    </>
  );
};
