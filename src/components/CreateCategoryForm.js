import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

const CreateCategory = props => {
	console.log("props in Cat", props.userId);
	const [cat, setCat] = useState({
		name: "",
		thumbnail: "",
		description: ""
	});

	const handleChanges = event => {
		setCat({ ...cat, [event.target.name]: event.target.value });
		console.log("in catChange", cat);
	};

	const submitForm = e => {
		e.preventDefault();
		const data = { ...cat }
		if (!data.thumbnail) delete data.thumbnail
		if (!data.description) delete data.description
		if (props.edit && props.edit.id) {
			/*! PROPS.EDIT.ID IS UNDEFINED AND THIS DOES NOT WORK YET UNTIL ZACH MAKES ID AVAILABLE FROM BACKEND SOMEHOW */
			axios
				.put(
					`https://top-nine.herokuapp.com/api/categories/${props.edit.id}`,
					data
				)
				.then(resp => {
					console.log("this is in CatForm", resp);
					setCat({
						name: "",
						thumbnail: "",
						description: ""
					});
					props.setEdit(); // make props.edit undefined, evals to false
					props.history.push("/home");
				})
				.catch(err => console.log(err));
		} else {
			axios
				.post(
					`https://top-nine.herokuapp.com/api/categories/${props.userId}/categories`,
					data
				)
				.then(resp => {
					console.log("this is in CatForm", resp);
					setCat({
						name: "",
						thumbnail: "",
						description: ""
					});
					props.history.push("/home");
				})
				.catch(err => console.log(err));
		}
	};

	useEffect(() => {
		if (props.edit) {
			console.log("props.edit", props.edit);
			setCat({
				// cannot use "...props.edit" because "cat" cannot have property "id"
				name: props.edit.name,
				thumbnail: props.edit.thumbnail,
				description: props.edit.description
			});
		}
	}, [props]);

	return (
		<div className="col-sm-6 mx-auto">
			<h3>Create Your Category</h3>
			<Form onSubmit={submitForm}>
				<FormGroup>
					<Input
						className="bg-primary text-white "
						type="text"
						name="name"
						placeholder="Category Title"
						onChange={handleChanges}
						value={cat.name}
					/>
					<Input
						type="text"
						name="thumbnail"
						placeholder="Thumbnail Image URL (optional)"
						onChange={handleChanges}
						value={cat.thumbnail}
					/>
					<Label for="desc1"></Label>
					<Input
						type="text"
						name="description"
						placeholder="Enter Description (optional)"
						onChange={handleChanges}
						value={cat.description}
					/>
				</FormGroup>
				<Button className="bg-success" type="submit">
					Create Top 9 Category
				</Button>
			</Form>
		</div>
	);
};
export default CreateCategory;
