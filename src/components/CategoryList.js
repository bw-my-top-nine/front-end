import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

function CategoryList(props) {
	const [cats, setCats] = useState([]);
	// useEffect(() => {
	// 	axios
	// 		.get("URL")
	// 		.then(response => {
	// 			console.log(response.data);
	// 		})
	// 		.catch(error => {
	// 			console.error("Not working", error);
	// 		});
	// }, []);

	return (
		<Table>
			<thead>
				<h3>Category List</h3>
			</thead>
			<tbody>{}</tbody>
		</Table>
	);
}

export default CategoryList;
