import React, { Component } from "react";
import { formatTime, parseTime } from "../../timeUtil";

class TimeForm extends Component {
	state = {
		start: "",
		end: ""
	};

	handleChangeStart = e => {
		this.setState({ start: e.target.value });
	};

	handleChangeEnd = e => {
		this.setState({ end: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		let newEntry = {
			start: parseTime(this.state.start),
			end: parseTime(this.state.end)
		};
		this.props.onAdd(newEntry);
		this.setState({ start: "", end: "" }); // clears form
	};

	render() {
		return (
			<form className="TimeForm TimeLog__row" onSubmit={this.handleSubmit}>
				<label>
					<input
						type="time"
						required
						value={this.state.start}
						onChange={this.handleChangeStart}
					/>
					<span className="TimeLog__label">Start Time</span>
				</label>
				<label>
					<input
						type="time"
						required
						value={this.state.end}
						onChange={this.handleChangeEnd}
					/>
					<span className="TimeLog__label">End Time</span>
				</label>
				<span>
					<button>Add</button>
				</span>
			</form>
		);
	}
}

export default TimeForm;
