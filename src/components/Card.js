import React from "react";
import "./styles/Card.css";
const Card = ({ month, content, duration }) => {
	return (
		<div className="card">
			<h2>{month}</h2>
			<small>Duración: {` ${duration} Hrs.`}</small>
			<ul>
				{content.map((item, index) => (
					<li key={`${month}-${index}`}>🕒{` ${item}`}</li>
				))}
			</ul>
		</div>
	);
};

export default Card;
