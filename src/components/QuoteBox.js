import React, { useState } from "react";

import QuoteText from "./QuoteText";
import QuoteAuthor from "./QuoteAuthor";
import { randomItem, quotes } from "./randomQuote";

const initialQuote = randomItem.quote;
const initialAuthor = randomItem.author;

const QuoteBox = () => {
	const [quote, setQuote] = useState(initialQuote);
	const [author, setAuthor] = useState(initialAuthor);

	const updateQuote = () => {
		setQuote(quotes[Math.floor(Math.random() * quotes.length)].quote);
		setAuthor(quotes[Math.floor(Math.random() * quotes.length)].author);
	};

	return (
		<div id="quote-box" className="m-auto">
			<div id="text" className="text-white lead">
				<QuoteText quote={quote} />
			</div>
			<div id="author" className="ml-5 text-white">
				<QuoteAuthor author={author} />
			</div>
			<div className="d-flex justify-content-between mt-3">
				<a href="https://twitter.com/intent/tweet/" id="tweet-quote">
					<i className="fab fa-twitter fa-2x"></i>
				</a>
				<button
					onClick={updateQuote}
					id="new-quote"
					className="btn btn-primary"
				>
					New quote
				</button>
			</div>
		</div>
	);
};

export default QuoteBox;
