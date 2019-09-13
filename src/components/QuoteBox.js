import React from "react";
import QuoteText from "./QuoteText";
import QuoteAuthor from "./QuoteAuthor";
import ShareButton from "./ShareButton";
import QuoteButton from "./QuoteButton";

const QuoteBox = () => {
	return (
		<div>
			<QuoteText />
			<QuoteAuthor />
			<QuoteButton />
			<ShareButton />
		</div>
	);
};

export default QuoteBox;
