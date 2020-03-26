import React, { Component } from "react";
import Light from "./light";

class Circuit extends Component {
	state = {
		connected: false
	};

	handleSwitch = () => {
		this.setState(prev => {
			return {
				connected: !prev.connected
			};
		});
	};

	render() {
		return (
			<div className="Circuit">
				<Light />
				<button onClick={this.handleSwitch}></button>
			</div>
		);
	}
}

export default Circuit;
