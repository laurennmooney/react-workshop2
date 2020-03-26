import React, { Component } from "react";
import "./Weather.css";
import WeatherImage from "./WeatherImage";

class Weather extends Component {
	render() {
		let alternateClass = checkWeather(this.props.conditions);

		return (
			<div className={"Weather box" + alternateClass}>
				<p>
					<WeatherImage conditions={this.props.conditions} />{" "}
					{this.props.conditions}
				</p>
				<p>
					<label>High</label> {this.props.highF}F (
					{fahrenheitToCelsius(this.props.highF)}C) <label>Low</label>{" "}
					{this.props.lowF}F ({fahrenheitToCelsius(this.props.lowF)}C)
				</p>
			</div>
		);
	}
}

function fahrenheitToCelsius(tempF) {
	return Math.round(((tempF - 32) * 5) / 9);
}

function checkWeather(condition) {
	if (condition === "Sunny") {
		return " Sunny";
	} else if (condition === "Rainy") {
		return " Rainy";
	} else if (condition === "Cloudy") {
		return " Cloudy";
	}
}

export default Weather;
