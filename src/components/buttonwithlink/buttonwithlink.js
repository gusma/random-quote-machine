import React from "react";

const ButtonWithLink = ({ buttonDisplayName, tweetHref, buttonIdName }) => (
	<a href={tweetHref}>
		<button id={buttonIdName}>{buttonDisplayName}</button>
	</a>
);

export default ButtonWithLink;
