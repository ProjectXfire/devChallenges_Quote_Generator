import React from "react";
// Styles
import { QuoteText } from "../styles/quote";
import { QuoteList, QuoteTitle } from "../styles/quoteList";
// Components
import { Loading } from "./loading";

export const QuoteAuthors = ({ authorQuotes, loading, author }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <QuoteTitle>{author}</QuoteTitle>
          <QuoteList>
            {authorQuotes.map((quote, index) => (
              <QuoteText key={index}>{quote.quoteText}</QuoteText>
            ))}
          </QuoteList>
        </>
      )}
    </>
  );
};
