import React, { Component } from "react";
import "./Inbox.css";
import Message from "./Message";

function Inbox() {
	return (
		<div className="Inbox box">
			<h3>Messages</h3>
			<ul>
				{this.state.messages.map((message, i) => (
					<Message
						message={message}
						onDelete={() => this.handleDelete(i)}
						onMarkAsRead={read => this.handleMarkAsRead(i, read)}
					/>
				))}
			</ul>
		</div>
	);
}

// class Inbox extends Component {
// 	state = {
// 		messages: [
// 			{ text: "Welcome to class!", read: false },
// 			{ text: "Please bring donuts.", read: true },
// 			{ text: "A square is a rhombus.", read: false }
// 		]
// 	};

// 	handleMarkAsRead = (index, read) => {
// 		this.setState(prev => {
// 			const newList = prev.messages.slice(0);
// 			const newItem = Object.assign({}, prev.messages[index]);
// 			newItem.read = read;
// 			newList[index] = newItem;
// 			return { messages: newList };
// 		});
// 	};

// 	handleDelete = index => {
// 		this.setState(prev => {
// 			const newList = prev.messages.slice(0);
// 			newList.splice(index, 1);
// 			return { messages: newList };
// 		});
// 	};

// render() {
// 	return (
// 		<div className="Inbox box">
// 			<h3>Messages</h3>
// 			<ul>
// 				{this.state.messages.map((message, i) => (
// 					<Message
// 						message={message}
// 						onDelete={() => this.handleDelete(i)}
// 						onMarkAsRead={read => this.handleMarkAsRead(i, read)}
// 					/>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }
// }

export default Inbox;
