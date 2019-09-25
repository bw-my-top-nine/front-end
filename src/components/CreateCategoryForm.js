import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

const CreateCategory = props => {
	console.log('props in Cat', props.userId);
	const [cat, setCat] = useState({
		name: "",
		thumbnail: "",
		description: ""
	});
	const handleChanges = event => {
		setCat({ ...cat, [event.target.name]: event.target.value });
		console.log('in catChange', cat);
	};
	const submitForm = (e) => {
		e.preventDefault();
		axios.post(`https://top-nine.herokuapp.com/api/categories/${props.userId}/categories`, cat) // id is ${props.userId}, not ":id"
		.then(resp => {
			console.log('this is in CatForm', resp);
			setCat({
			name: "",
			thumbnail: "",
			description: ""
			});
			props.history.push('/home')
		})
		.catch(err => console.log(err))
	}
	return (
		<Form onSubmit={submitForm}>
			<FormGroup>
				<Label htmlFor="title">Category Title</Label>
				<Input
					className="bg-primary text-white "
					type="text"
					name="name"
					placeholder="Category"
					onChange={handleChanges}
					value={cat.name}
				/>
				<Input
					type="text"
					name="thumbnail"
					placeholder="enter optional image URL"
					onChange={handleChanges}
					value={cat.thumbnail}
				/>
				<Label for="desc1"></Label>
				<Input
					type="text"
					name="description"
					placeholder="enter optional description"
					onChange={handleChanges}
					value={cat.description}
				/>
			</FormGroup>
			<Button className="bg-success" type="submit">
				Create Top 9 Category
			</Button>
		</Form>
	);
};
export default CreateCategory;
