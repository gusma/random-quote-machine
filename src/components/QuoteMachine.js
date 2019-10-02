import React from "react";
import Button from "../components/button/button";
import ButtonWithLink from "../components/buttonwithlink/buttonwithlink";

const QuoteMachine = props => {
	return (
		<React.Fragment>
			<div id='quote-box'>
				<p id='text'> {props.selectedQuote ? props.selectedQuote.quote : ""}</p>
				<p id='author'>
					{" "}
					{props.selectedQuote ? props.selectedQuote.author : ""}
				</p>
				<Button
					buttonDisplayName='Get new quote'
					buttonIdName='new-quote'
					clickHandler={props.assignNewQuoteIndex}
				/>
				<a
					id='tweet-quote'
					href={`https://twitter.com/intent/tweet?text=${
						props.selectedQuote ? props.selectedQuote.quote : ""
					} -${
						props.selectedQuote ? props.selectedQuote.author : ""
					}&hashtags=thequotemachine`}
				>
					Tweet
				</a>
			</div>
		</React.Fragment>
	);
};

export default QuoteMachine;
