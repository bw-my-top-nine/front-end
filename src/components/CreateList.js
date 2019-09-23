import React from "react";
import axios from "axios";
import CreateItem from "./CreateItem";

function CreateList() {
	const [list, setList] = useState([]);
	// useEffect(() => {
	// 	axios
	// 		.get("URL")
	// 		.then(response => {
	// 			console.log(response.data);
	// 			const newData = response.data;
	// 			setList(newData);
	// 		})
	// 		.catch(error => {
	// 			console.error("Not working", error);
	// 		});
	// }, []);

	return (
		<section className="item-list">
			<h2 className="item-container">
				{list.map(item => {
					return <CreateItem getName={item.name} />;
				})}
			</h2>
		</section>
	);
}

export default CreateList;
