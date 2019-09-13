import React from "react";
import QuoteBox from "./QuoteBox";

const App = () => {
	const styles = {
		marginTop: "15%",
		width: 600,
		height: 350,
		borderRadius: 15,
		backgroundColor: "gray"
	};

	return (
		<div style={styles} className="container d-flex justify-content-center">
			<QuoteBox />
		</div>
	);
};

export default App;
