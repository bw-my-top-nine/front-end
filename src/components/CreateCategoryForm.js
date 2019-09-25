import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import CreateItem from "./CreateItem";

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

	useEffect(()=>{
		if (props.edit) {
			let temp = {
				title: props.edit.name,
				catImage: props.edit.thumbnail,
				desc: props.edit.description,
			}
			props.edit.items.forEach((item, index) => {
				temp[`item${index+1}`] = item.name
				temp[`image${index+1}`] = item.thumbnail
			})
			setCat(temp)
		}
	},[props])

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
				<CreateItem itemNum="1" handleChanges={handleChanges} cat={cat} />
				<CreateItem itemNum="2" handleChanges={handleChanges} cat={cat} />
				<CreateItem itemNum="3" handleChanges={handleChanges} cat={cat} />
				<CreateItem itemNum="4" handleChanges={handleChanges} cat={cat} />
				<CreateItem itemNum="5" handleChanges={handleChanges} cat={cat} />
				<CreateItem itemNum="6" handleChanges={handleChanges} cat={cat} />
				<CreateItem itemNum="7" handleChanges={handleChanges} cat={cat} />
				<CreateItem itemNum="8" handleChanges={handleChanges} cat={cat} />
				<CreateItem itemNum="9" handleChanges={handleChanges} cat={cat} />
			</FormGroup>
			<Button className="bg-success" type="submit" tag={Link} to="/home">
				Create Top 9 List
			</Button>
		</Form>
	);
};
export default CreateCategory;
