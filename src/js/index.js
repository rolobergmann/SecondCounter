//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

// component
function SimpleCounter(props) {
	return (
		<div className="secondsCounter">
			<div className="icon">C</div>
			<div className="six">{props.six}</div>
			<div className="five">{props.five}</div>
			<div className="four">{props.four}</div>
			<div className="three">{props.three}</div>
			<div className="two">{props.two}</div>
			<div className="one">{props.one}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	six: PropTypes.number,
	five: PropTypes.number,
	four: PropTypes.number,
	three: PropTypes.number,
	two: PropTypes.number,
	one: PropTypes.number
};
let counter = 0;
setInterval(function() {
	const dSix = Math.floor(counter / 100000);
	const dFive = Math.floor(counter / 10000);
	const dFour = Math.floor(counter / 1000);
	const dThree = Math.floor(counter / 100);
	const dTwo = Math.floor(counter / 10);
	const dOne = Math.floor(counter / 1);
	console.log(dTwo, dOne);
	counter++;
}, 1000);
//render your react application
ReactDOM.render(
	<SimpleCounter one={counter.indexOf()} />,
	document.querySelector("#app")
);
