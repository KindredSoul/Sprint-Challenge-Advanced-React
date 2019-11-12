import React from "react";

export const DataCard = props => {
	const { name, country, searches } = props.cardData;

	return (
		<div className="darkCard">
			<h2>Name: {name}</h2>
			<h3>Country: {country}</h3>
			<h3>Times Searched: {searches}</h3>
		</div>
	);
};
