import React from "react";
import { DataCard } from "./DataCard";
import { DarkMode } from "./DarkMode";

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
					// console.log(res);
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
				<DarkMode />
				{this.state.wwcData.map(data => <DataCard key={data.id} cardData={data} />)}
			</div>
		);
	}
}

export default App;
