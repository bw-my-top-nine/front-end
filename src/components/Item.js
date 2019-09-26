import React, { useState } from "react";
import { Row, Button } from 'reactstrap'
import axios from 'axios'

export default function ItemCard(props) {
	const [deleted, setDeleted] = useState(false)

	const deleteItem = () => {
		axios.delete(`https://top-nine.herokuapp.com/api/items/${props.item.id}`)
			.then(resp => {
				console.log(resp)
				props.setItems(props.items.filter(item => item != props.item))
			})
			.catch(console.error)
	}

	return (
		<Row className="bg-dark">
			{props.item.thumbnail?<img className="col-sm-3 p-0" src={props.item.thumbnail} alt={props.item.name} />:''}
			<div className="col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
				<h4>{props.item.name}</h4>
				<Button
					className="bg-primary btn-sm mx-2"
					onClick={()=>{
						props.setEditItems(props.item)
						props.history.push("/home/createItemFormRevamp")
					}}
				>
					Edit
				</Button>
				<Button
					className="btn-danger btn-sm"
					onClick={deleteItem}
				>
					Delete
				</Button>
			</div>
		</Row>
	);
}
