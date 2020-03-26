import React from "react";
import "./App.css";
import Weather from "./components/Weather/Weather";
import GradeForm from "./components/Grade/GradeForm";
import Inbox from "./components/Inbox/Inbox";
import TimeLog from "./components/TimeLog/TimeLog";
import WeatherForm from "./components/Weather/WeatherForm";
import Giphy from "./components/GiphyAPI";
import WeatherList from "./components/Weather/WeatherList";
import NameForm from "./components/NameForm/NameForm";

function App() {
	return (
		<div className="App">
			<NameForm />
			{/* <Inbox /> */}
			{/* <GradeForm /> */}
			{/* <WeatherList /> */}
			{/* <TimeLog /> */}
			{/* <Giphy /> */}
		</div>
	);
}

export default App;
