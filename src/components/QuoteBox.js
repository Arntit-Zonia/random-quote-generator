import React, { useState } from "react";

import QuoteText from "./QuoteText";
import QuoteAuthor from "./QuoteAuthor";
import { randomItem } from "./randomQuote";

const initialQuote = randomItem();

const QuoteBox = () => {
	const [quote, setQuote] = useState(initialQuote);

	const updateQuote = () => {
		setQuote(randomItem());
	};

	return (
		<div id="quote-box" className="m-auto">
			<div id="text" className="text-white lead">
				<QuoteText quote={quote.quote} />
			</div>
			<div id="author" className="ml-5 text-white">
				<QuoteAuthor author={quote.author} />
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
