import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import CreateItem from "./CreateItem";

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
	const submitForm = event => {
		event.preventDefault();
		//axios call through either back end or parent
		console.log(props);
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
		console.log(event.target.value);
	};

	useEffect(() => {
		// setItems(props.edit)
	}, [props]);

	return (
		<Form onSubmit={submitForm}>
			<FormGroup>
				<Label htmlFor="title">Top 9 Items</Label>
				<CreateItem itemNum="1" handleChanges={handleChanges} items={items} />
				<CreateItem itemNum="2" handleChanges={handleChanges} items={items} />
				<CreateItem itemNum="3" handleChanges={handleChanges} items={items} />
				<CreateItem itemNum="4" handleChanges={handleChanges} items={items} />
				<CreateItem itemNum="5" handleChanges={handleChanges} items={items} />
				<CreateItem itemNum="6" handleChanges={handleChanges} items={items} />
				<CreateItem itemNum="7" handleChanges={handleChanges} items={items} />
				<CreateItem itemNum="8" handleChanges={handleChanges} items={items} />
				<CreateItem itemNum="9" handleChanges={handleChanges} items={items} />
			</FormGroup>
			<Button className="bg-success" type="submit" tag={Link} to="/home">
				Add Your List Items
			</Button>
		</Form>
	);
};
export default CreateItems;
