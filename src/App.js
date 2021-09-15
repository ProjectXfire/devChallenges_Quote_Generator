import { useEffect, useState } from "react";
// Services
import { getOneRandom, getList } from "./services/request";
// Components
import { Container } from "./components/container";
import { Quote } from "./components/quote";
import { QuoteAuthors } from "./components/quoteAuthors";

function App() {
  const [randomQuote, setRandomQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showList, setShowList] = useState(false);
  const [authorQuotes, setAuthorQuotes] = useState(null);
  const [author, setAuthor] = useState("");

  // Fetching quote
  const fetchRandomQuote = async () => {
    setLoading(true);
    try {
      const quote = await getOneRandom();
      setRandomQuote(quote);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // On click random button
  const getRandomQuote = () => {
    setShowList(false);
    fetchRandomQuote();
  };

  // Get quote list by author
  const getQuotesByAuthor = async (author) => {
    setShowList(true);
    setLoading(true);
    setAuthor(author);
    try {
      const quotes = await getList(`author=${author}`);
      setAuthorQuotes(quotes);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Onload page
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <Container getRandomQuote={getRandomQuote}>
      {showList ? (
        <QuoteAuthors
          authorQuotes={authorQuotes}
          author={author}
          loading={loading}
        />
      ) : (
        <Quote
          randomQuote={randomQuote}
          loading={loading}
          showList={showList}
          getQuotesByAuthor={getQuotesByAuthor}
        />
      )}
    </Container>
  );
}

export default App;
