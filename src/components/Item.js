import React from "react";
import { Row } from 'reactstrap'

export default function ItemCard(props) {
	return (
		<Row className="bg-dark">
			{props.thumbnail?<img className="col-sm-3 p-0" src={props.thumbnail} alt={props.name} />:''}
			<div className="col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
				<h4>{props.name}</h4>
				{/* add edit and delete buttons */}
			</div>
		</Row>
	);
}
