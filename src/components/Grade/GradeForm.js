import React, { Component } from "react";
import Grade from "./Grade";
import "./GradeForm.css";

class GradeForm extends Component {
	state = {
		label: "",
		score: 0,
		total: 0,
		grades: [
			// { label: "Worksheet", score: 7, total: 10, passing: true },
			// { label: "Quiz", score: 5, total: 15, passing: false },
			// { label: "Exam", score: 80, total: 100, passing: true }
		]
	};

	handleChangeLabel = e => {
		this.setState({ label: e.target.value });
	};

	handleChangeScore = e => {
		this.setState({ score: e.target.value });
	};

	handleChangeTotal = e => {
		this.setState({ total: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const newGrade = {
			label: this.state.label,
			score: this.state.score,
			total: this.state.total,
			passing: percentage(this.state.score, this.state.total) >= 70
		};

		this.setState(prev => {
			const newGradeList = prev.grades.slice(0);
			newGradeList.push(newGrade);
			return { grades: newGradeList };
		});
	};

	handleReset = () => {
		this.setState({ grades: [] });
	};

	render() {
		return (
			<div className="GradeForm">
				<h3>Grade Form:</h3>
				<form onSubmit={this.handleSubmit}>
					<p>
						<label>Label: </label>
						<input value={this.state.label} onChange={this.handleChangeLabel} />
					</p>
					<p>
						<label>Total: </label>
						<input
							type="number"
							max="100"
							value={this.state.total}
							onChange={this.handleChangeTotal}
						/>
						<span>{this.state.total}</span>
					</p>
					{this.state.total != 0 ? (
						<p>
							<label>Score: </label>
							<input
								type="range"
								max={this.state.total}
								value={this.state.score}
								onChange={this.handleChangeScore}
							/>
							<span>{this.state.score}</span>
						</p>
					) : (
						<span id="selectScore">Please select total</span>
					)}
					<p>
						<button>Add Grade</button>
					</p>
				</form>
				<p>
					<button onClick={this.handleReset}>Reset List</button>
				</p>

				<h3>List of existing grades:</h3>
				<div className="gradeList">
					{this.state.grades.map((grade, index) => (
						<Grade
							key={index}
							label={grade.label}
							score={grade.score}
							total={grade.total}
							passing={grade.passing}
						/>
					))}
				</div>
			</div>
		);
	}
}

function percentage(score, total) {
	return ((score / total) * 100).toFixed(1);
}

export default GradeForm;
