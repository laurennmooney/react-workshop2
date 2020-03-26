import React, { Component } from "react";

class Giphy extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		fetch(
			"https://api.giphy.com/v1/gifs/search?api_key=Gf4Igj4U4uSSLfCLmPNup9TWNs2GC4OJ&q=brooklyn99&limit=10&offset=0&rating=PG-13&lang=en"
		)
			.then(response => response.json())
			.then(json => {
				this.setState(prev => {
					const newImgList = prev.data.splice(0);
					newImgList.push([...json.data]);
					return { data: newImgList };
				});
			});
	}

	render() {
		return (
			<div className="Giphy">
				<div>
					{this.state.data.map(gif => {
						// <img src={gif.type} />;
					})}
				</div>
			</div>
		);
	}
}

export default Giphy;
