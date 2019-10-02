import React from "react";

const Button = ({ buttonDisplayName, clickHandler, buttonIdName }) => (
	<button onClick={clickHandler} id={buttonIdName}>
		{buttonDisplayName}
	</button>
);

export default Button;
