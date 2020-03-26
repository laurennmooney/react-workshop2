import React, { Component } from "react";
import "./Message.css";

// this is a functional component. it basically achieves the same thing but without the class/extends, and render.
// you also use parameters instead of using this.props stuff
// however, there is no where for state to go - this is what hooks are for instead
function Message({ message, onMarkAsRead, onDelete }) {
	return (
		<li className={"Message" + (message.read ? " Message--read" : "")}>
			{message.read && <span className="Message__read">&#10004;</span>}
			<span className="Message__text">{message.text}</span>
			<button onClick={() => onMarkAsRead(!message.read)}>
				Mark {message.read ? "Unread" : "Read"}
			</button>
			<button onClick={onDelete}>Delete</button>
		</li>
	);
}

// class Message extends Component {
// 	render() {
// 		return (
// 			<li
// 				className={
// 					"Message" + (this.props.message.read ? " Message--read" : "")
// 				}
// 			>
// 				{this.props.message.read && (
// 					<span className="Message__read">&#10004;</span>
// 				)}
// 				<span className="Message__text">{this.props.message.text}</span>
// 				<button
// 					onClick={() => this.props.onMarkAsRead(!this.props.message.read)}
// 				>
// 					Mark {this.props.message.read ? "Unread" : "Read"}
// 				</button>
// 				<button onClick={this.props.onDelete}>Delete</button>
// 			</li>
// 		);
// 	}
// }

export default Message;
