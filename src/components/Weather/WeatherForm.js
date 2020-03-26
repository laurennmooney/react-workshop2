import React, { Component } from "react";
import Weather from "./Weather";
import "./WeatherForm.css";

class WeatherForm extends Component {
	state = {
		conditions: "sunny",
		highF: 0
	};

	handleChangeConditions = e => {
		this.setState({ conditions: e.target.value });
	};

	handleChangeHighF = e => {
		this.setState({ highF: e.target.value });
	};

	// one way to add to a list on submit: ---
	handleSubmit = e => {
		e.preventDefault();
		const entry = {
			conditions: this.state.conditions,
			high: this.state.highF,
			low: this.state.highF - 18
		};
		this.props.onAdd(entry);
		this.setState({ conditions: "", highF: "" });
	};

	render() {
		return (
			<div className="WeatherForm box">
				<h3>Weather Form</h3>
				<form onSubmit={this.handleSubmit}>
					<p>
						<label>Conditions: </label>
						<select
							value={this.state.conditions}
							defaultValue={this.state.conditions}
							onChange={this.handleChangeConditions}
						>
							<option value="Sunny" checked>
								Sunny
							</option>
							<option value="Cloudy">Cloudy</option>
							<option value="Rainy">Rainy</option>
						</select>
					</p>
					<p>
						<label>High F: </label>
						<input
							type="range"
							max="120"
							value={this.state.highF}
							onChange={this.handleChangeHighF}
							required
						/>
						<span>{this.state.highF !== 0 ? this.state.highF : 0} F</span>
					</p>
					<p>
						<button type="submit">Add</button>
					</p>
				</form>
			</div>
		);
	}
}

export default WeatherForm;
