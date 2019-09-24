import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const CreateCategory = props => {
	console.log(props);
	const [cat, setCat] = useState({ title: "" });
	const handleChanges = event => {
		setCat({ ...cat, [event.target.name]: event.target.value });
		console.log(cat);
	};
	const submitForm = event => {
		event.preventDefault();
		props.addNewCat(cat);
		setCat({ title: "" });
		console.log(event.target.value);
	};

	return (
		<Form onSubmit={submitForm}>
			<FormGroup>
				<Label htmlFor="title">Category Title</Label>
				<Input
					type="text"
					name="title"
					placeholder="Category"
					onChange={handleChanges}
					value={cat.title}
				/>
			</FormGroup>
			<Button type="submit">Add New Category</Button>
		</Form>
	);
};
export default CreateCategory;
