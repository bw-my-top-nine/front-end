import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const CreateCategory = props => {
	console.log(props);
	const [cat, setCat] = useState({
		title: "",
		catImage: "",
		desc: ""
	});
	const handleChanges = event => {
		setCat({ ...cat, [event.target.name]: event.target.value });
		console.log(cat);
	};
	const submitForm = event => {
		event.preventDefault();
		//axios call through either back end or parent
		console.log(props);
		setCat({
			title: "",
			catImage: "",
			desc: ""
		});
		console.log(event.target.value);
	};

	useEffect(() => {
		// setCat(props.edit)
	}, [props]);

	return (
		<Form onSubmit={submitForm}>
			<FormGroup>
				<Label htmlFor="title">Category Title</Label>
				<Input
					className="bg-primary text-white "
					type="text"
					name="title"
					placeholder="Category"
					onChange={handleChanges}
					value={cat.title}
				/>
				<Input
					type="text"
					name="catImage"
					placeholder="enter optional image URL"
					onChange={handleChanges}
					value={cat.catImage}
				/>
				<Label for="desc1"></Label>
				<Input
					type="text"
					name="desc"
					placeholder="enter optional description"
					onChange={handleChanges}
					value={cat.desc}
				/>
			</FormGroup>
			<Button className="bg-success" type="submit" tag={Link} to="/home">
				Create Top 9 Category
			</Button>
		</Form>
	);
};
export default CreateCategory;
