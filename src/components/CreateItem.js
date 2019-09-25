import React from "react";
import { Input } from "reactstrap";
import "../bootstrap.min.css";

function CreateItem(props) {
	const name = `name${props.itemNum}`;
	const image = `image${props.itemNum}`;

	return (
		<>
			<Input
				className="bg-primary text-white"
				type="text"
				name={name}
				placeholder={`Item ${props.itemNum}`}
				onChange={props.handleChanges}
				value={props.items[name]}
			/>
			<Input
				type="url"
				name={image}
				placeholder="Thumbnail image URL (optional)"
				onChange={props.handleChanges}
				value={props.items[image]}
			/>
		</>
	);
}

export default CreateItem;
