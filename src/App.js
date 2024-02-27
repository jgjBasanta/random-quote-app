import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  const getQuotes = async () => {
    try {
      const response = await axios.get("https://type.fit/api/quotes");
      setQuotes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getQuote = () => {
    if (quotes.length > 0) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuoteText(randomQuote.text);
      setQuoteAuthor(randomQuote.author);
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    console.log(quotes);
    getQuote();
  }, [quotes]);

  return (
    <div id="quote-box">
      <p id="text">"{quoteText}"</p>
      <p id="author">- Author: {quoteAuthor}</p>
      <button id="new-quote" onClick={getQuote} type="button">
        New Quote
      </button>
      <a id="tweet-quote">Tweet</a>
    </div>
  );
}

export default App;
