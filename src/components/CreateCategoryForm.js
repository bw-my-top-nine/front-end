import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const CreateCategory = props => {
	console.log(props);
	const [cat, setCat] = useState({
		title: "",
		item1: "",
		item2: "",
		item3: "",
		item4: "",
		item5: "",
		item6: "",
		item7: "",
		item8: "",
		item9: ""
	});
	const handleChanges = event => {
		setCat({ ...cat, [event.target.name]: event.target.value });
		console.log(cat);
	};
	const submitForm = event => {
		event.preventDefault();
		props.addNewCat(cat);
		setCat({
			title: "",
			item1: "",
			item2: "",
			item3: "",
			item4: "",
			item5: "",
			item6: "",
			item7: "",
			item8: "",
			item9: ""
		});
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
			<FormGroup>
				<Label htmlFor="title">Top 9 Items</Label>
				<Input
					type="text"
					name="item1"
					placeholder="#1"
					onChange={handleChanges}
					value={cat.item1}
				/>
				<Input
					type="text"
					name="item2"
					placeholder="#2"
					onChange={handleChanges}
					value={cat.item2}
				/>
				<Input
					type="text"
					name="item3"
					placeholder="#3"
					onChange={handleChanges}
					value={cat.item3}
				/>
				<Input
					type="text"
					name="item4"
					placeholder="#4"
					onChange={handleChanges}
					value={cat.item4}
				/>
				<Input
					type="text"
					name="item5"
					placeholder="#5"
					onChange={handleChanges}
					value={cat.item5}
				/>
				<Input
					type="text"
					name="item6"
					placeholder="#6"
					onChange={handleChanges}
					value={cat.item6}
				/>
				<Input
					type="text"
					name="item7"
					placeholder="#7"
					onChange={handleChanges}
					value={cat.item7}
				/>
				<Input
					type="text"
					name="item8"
					placeholder="#8"
					onChange={handleChanges}
					value={cat.item8}
				/>
				<Input
					type="text"
					name="item9"
					placeholder="#9"
					onChange={handleChanges}
					value={cat.item9}
				/>
			</FormGroup>
			<Button type="submit">Create Top 9 List</Button>
		</Form>
	);
};
export default CreateCategory;
