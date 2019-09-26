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
		console.log(event.target.name)
		console.log(event.target.value)
		setItems({ ...items, [event.target.name]: event.target.value });
		console.log(items);
	};
	const submitForm = (e) => {
		e.preventDefault();
		let data = []
		for (let key of Object.keys(items)) {
			console.log(key)
			let index = Number(key.slice(-1)) - 1 //get number at end of key string minus 1
			console.log(index)
			if (!data[index]) data[index] = {}
			data[index][/item/.test(key)?'name':'thumbnail'] = items[key]
			console.log(data[index])
		}
		console.log('data', data)
		// Because axios is asyncronous, order of items is random every edit. Definitely a feature, not a bug...
		if (props.edit && props.edit[0] && props.edit[0].id) { /*! PROPS.EDIT.ID IS UNDEFINED AND THIS DOES NOT WORK YET UNTIL ZACH MAKES ID AVAILABLE FROM BACKEND SOMEHOW */
			data.forEach((item, index) => {
				if (props.edit[index]) {
					axios.put(`https://top-nine.herokuapp.com/api/items/${props.edit[index].id}`, item)
						.then(console.log)
						.catch(console.error)
				}
				else {
					axios.post(`https://top-nine.herokuapp.com/api/items/${props.editCategory.id}/items`, item) // needs category id
						.then(console.log)
						.catch(console.error)
				}
			})
			// to do: set up boolean to only clears edit after success
			props.setEdit()
		}
		else {
			data.forEach(item => {
				axios.post(`https://top-nine.herokuapp.com/api/items/${props.editCategory.id}/items`, item) // needs category id
					.then(console.log)
					.catch(console.error)
			})
		}
		props.setEditCategory()
		// unnecessary because redirecting to /home
			// setItems({
			// 	item1: "",
			// 	image1: "",
			// 	...
			// });
		// to do: set up boolean to only redirect after put/post success
		props.history.push('/home')
	}
	useEffect(() => {
		if (props.edit && props.edit[0]) {
			console.log(props)
			let temp = {}
			props.edit.forEach((item, index) => {
				temp[`item${index+1}`] = item.name
				temp[`image${index+1}`] = item.thumbnail
			})
			console.log(temp)
			setItems(temp)
		}
	}, [props]);

	return (
		<Form onSubmit={submitForm}>
			<FormGroup>
				<Label htmlFor="title">Top 9 Items</Label>
				{[1,2,3,4,5,6,7,8,9].map(num=><CreateItem key={num} itemNum={num} handleChanges={handleChanges} items={items} />)}
			</FormGroup>
			<Button className="bg-success" type="submit">
				Add Your List Items
			</Button>
		</Form>
	);
};
export default CreateItems;
