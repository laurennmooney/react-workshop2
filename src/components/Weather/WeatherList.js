import React, { Component } from "react";
import Weather from "./Weather";
import WeatherForm from "./WeatherForm";

class WeatherList extends Component {
	state = {
		list: [
			{ conditions: "Rainy", high: 72, low: 55 },
			{ conditions: "Cloudy", high: 50, low: 42 }
		]
	};

	handleAdd = entry => {
		this.setState(prev => {
			let newList = prev.list.slice(0);
			newList.push(entry);
			return { list: newList };
		});
	};

	render() {
		return (
			<div className="WeatherList">
				<WeatherForm onAdd={this.handleAdd} />
				{this.state.list.map((data, index) => (
					<Weather
						key={index}
						conditions={data.conditions}
						highF={data.high}
						lowF={data.low}
					/>
				))}
			</div>
		);
	}
}
export default WeatherList;
