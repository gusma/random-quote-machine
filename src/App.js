import React from "react";
import { random } from "lodash";
import Button from "./components/button/button";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { quotes: [], selectedQuoteIndex: null };

		this.selectedQuoteIndex = this.selectQuoteIndex.bind(this);
		this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
	}

	componentDidMount() {
		fetch(
			"https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
		)
			.then(data => data.json())
			.then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
	}

	get selectedQuote() {
		if (
			!this.state.quotes.length ||
			!Number.isInteger(this.state.selectedQuoteIndex)
		) {
			return;
		}
		return this.state.quotes[this.state.selectedQuoteIndex];
	}

	selectQuoteIndex() {
		if (!this.state.quotes.length) {
			return;
		}
		return random(0, this.state.quotes.length - 1);
	}

	assignNewQuoteIndex() {
		this.setState({ selectedQuoteIndex: this.selectQuoteIndex() });
	}
	nextQuoteClickHandler() {}
	tweetQuote() {}
	render() {
		return (
			<div className='App'>
				<div id='quote-box'>
					<p id='text'> {this.selectedQuote ? this.selectedQuote.quote : ""}</p>
					<p id='author'>
						{" "}
						{this.selectedQuote ? this.selectedQuote.author : ""}
					</p>
					<Button
						buttonDisplayName='Get new quote'
						clickHandler={this.assignNewQuoteIndex}
					/>
					<Button buttonDisplayName='Tweet' clickHandler={this.tweetQuote} />
				</div>
			</div>
		);
	}
}

export default App;
