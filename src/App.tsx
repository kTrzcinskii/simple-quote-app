import React, { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { fetchNewQuote } from "./API";
import "./App.scss";

export const App: React.FC = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [fetching, setFetching] = useState(false);

  const getNewQuote = async () => {
    setFetching(true);
    const quote = await fetchNewQuote();
    setTimeout(() => {
      setAuthor(quote.author);
      setQuote(quote.content);
      setFetching(false);
    }, 400);
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div id='quote-box'>
      <div className='content-container'>
        <p className={`quote ${fetching ? "opacity-0" : null}`} id='text'>
          {quote}
        </p>
        <p className={`author ${fetching ? "opacity-0" : null}`} id='author'>
          {author}
        </p>
      </div>
      <div className='button-container'>
        <a
          href={`twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote}" - ${author}`
          )}`}
          id='tweet-quote'
          target='_blank'
          rel='noreferrer'
        >
          <FaTwitter />
        </a>
        <button id='new-quote' onClick={getNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
