import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import CreateItem from "./CreateItem";
import axios from "axios";

const CreateItems = props => {
	console.log(props);
	const [items, setItems] = useState({
		item1: "",
		image1: "",
		item2: "",
		image2: "",
		item3: "",
		image3: "",
		item4: "",
		image4: "",
		item5: "",
		image5: "",
		item6: "",
		image6: "",
		item7: "",
		image7: "",
		item8: "",
		image8: "",
		item9: "",
		image9: ""
	});
	const handleChanges = event => {
		setItems({ ...items, [event.target.name]: event.target.value });
		console.log(items);
	};
	const submitForm = () => {
		let data = []
		for (let key of Object.keys(items)) {
			let index = Number(key.slice(-1)) - 1
			if (!data[index]) data[index] = {}
			data[index][/item/.test(key)?'name':'thumbnail'] = items[key]
		}
		data.forEach(item => {
			axios.post(`https://top-nine.herokuapp.com/api/items/${props.userId}/items`, item)
				.then(resp => {
					console.log(resp)
				})
				.catch(console.error)
		})
		setItems({
			item1: "",
			image1: "",
			item2: "",
			image2: "",
			item3: "",
			image3: "",
			item4: "",
			image4: "",
			item5: "",
			image5: "",
			item6: "",
			image6: "",
			item7: "",
			image7: "",
			item8: "",
			image8: "",
			item9: "",
			image9: ""
		});
		props.history.push('/home')
	}
	useEffect(() => {
		if (props.edit) {
			let temp = {}
			props.edit.forEach((item, index) => {
				temp[`item${index+1}`] = item.name
				temp[`image${index+1}`] = item.thumbnail
			})
			setItems(temp)
		}
	}, [props]);

	return (
		<Form onSubmit={submitForm}>
			<FormGroup>
				<Label htmlFor="title">Top 9 Items</Label>
				{[1,2,3,4,5,6,7,8,9].map(num=><CreateItem key={num} itemNum={num} handleChanges={handleChanges} items={items} />)}
			</FormGroup>
			<Button className="bg-success" type="submit" tag={Link} to="/home">
				Add Your List Items
			</Button>
		</Form>
	);
};
export default CreateItems;
