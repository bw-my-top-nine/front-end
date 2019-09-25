import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const CreateCategory = props => {
	console.log(props);
	const [cat, setCat] = useState({
		title: "",
		catImage: "",
		desc: "",
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
			desc: "",
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
		console.log(event.target.value);
	};

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
			<FormGroup>
				<Label htmlFor="title">Top 9 Items</Label>
				<Input
					className="bg-primary text-white"
					type="text"
					name="item1"
					placeholder="#1"
					onChange={handleChanges}
					value={cat.item1}
				/>
				<Input
					type="text"
					name="image1"
					placeholder="enter optional image URL"
					onChange={handleChanges}
					value={cat.image1}
				/>
				<Input
					className="bg-primary text-white"
					type="text"
					name="item2"
					placeholder="#2"
					onChange={handleChanges}
					value={cat.item2}
				/>
				<Input
					type="text"
					name="image2"
					placeholder="enter optional image URL"
					onChange={handleChanges}
					value={cat.image2}
				/>
				<Input
					className="bg-primary text-white"
					type="text"
					name="item3"
					placeholder="#3"
					onChange={handleChanges}
					value={cat.item3}
				/>
				<Input
					type="text"
					name="image3"
					placeholder="enter optional image URL"
					onChange={handleChanges}
					value={cat.image3}
				/>
				<Input
					className="bg-primary text-white"
					type="text"
					name="item4"
					placeholder="#4"
					onChange={handleChanges}
					value={cat.item4}
				/>
				<Input
					type="text"
					name="image4"
					placeholder="enter optional image URL"
					onChange={handleChanges}
					value={cat.image4}
				/>
				<Input
					className="bg-primary text-white"
					type="text"
					name="item5"
					placeholder="#5"
					onChange={handleChanges}
					value={cat.item5}
				/>
				<Input
					type="text"
					name="image5"
					placeholder="enter optional image URL"
					onChange={handleChanges}
					value={cat.image5}
				/>
				<Input
					className="bg-primary text-white"
					type="text"
					name="item6"
					placeholder="#6"
					onChange={handleChanges}
					value={cat.item6}
				/>
				<Input
					type="text"
					name="image6"
					placeholder="enter optional image URL"
					onChange={handleChanges}
					value={cat.image6}
				/>
				<Input
					className="bg-primary text-white"
					type="text"
					name="item7"
					placeholder="#7"
					onChange={handleChanges}
					value={cat.item7}
				/>
				<Input
					type="text"
					name="image7"
					placeholder="enter optional image URL"
					onChange={handleChanges}
					value={cat.image7}
				/>
				<Input
					className="bg-primary text-white"
					type="text"
					name="item8"
					placeholder="#8"
					onChange={handleChanges}
					value={cat.item8}
				/>
				<Input
					type="text"
					name="image8"
					placeholder="enter optional image URL"
					onChange={handleChanges}
					value={cat.image8}
				/>
				<Input
					className="bg-primary text-white"
					type="text"
					name="item9"
					placeholder="#9"
					onChange={handleChanges}
					value={cat.item9}
				/>
				<Input
					type="text"
					name="image9"
					placeholder="enter optional image URL"
					onChange={handleChanges}
					value={cat.image9}
				/>
			</FormGroup>
			<Button className="bg-success" type="submit" tag={Link} to="/home">
				Create Top 9 List
			</Button>
		</Form>
	);
};
export default CreateCategory;
