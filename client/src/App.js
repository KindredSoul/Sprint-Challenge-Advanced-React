import React from "react";
import "./App.css";

class App extends React.Component {
	state = {
		wwcData: []
	};
	componentDidMount() {
		const getData = () => {
			fetch("http://localhost:5000/api/players")
				.then(res => res.json())
				.then(res => {
					console.log(res);
					this.setState({
						wwcData: res
					});
				})
				.catch(err => console.log(err));
		};
		getData();
	}
	render() {
		return (
			<div>
				{this.state.wwcData.map(data => {
					return (
						<div key={data.id}>
							<h2>Name: {data.name}</h2>
							<h3>Country: {data.country}</h3>
							<h3>Times searhced: {data.searches}</h3>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
