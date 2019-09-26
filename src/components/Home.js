import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { axiosWithAuth } from "./axiosAuth";
import MyLists from "./MyLists";
import CreateCategory from "./CreateCategoryForm";
import CreateItemForm from "./CreateItemForm";
import CreateItemFormRevamp from "./CreateItemFormRevamp";

function Home(props) {
//no props in home    
    console.log('props in Home', props);
    const userId = localStorage.getItem('userId')
//for the getData kind of useless rn
	const [editCategory, setEditCategory] = useState()
    const [editItems, setEditItems] = useState()

    return (
        <section>
            <Route exact path="/home" render={props=><MyLists {...props} userId={userId} setEditCategory={setEditCategory} setEditItems={setEditItems} />} /> {/* to do: pass data/handlers from axios/useState */}
			<Route path="/home/createcategoryform" render={props=><CreateCategory {...props} userId={userId} edit={editCategory} setEdit={setEditCategory} />} /> {/* to do: pass data/handlers from axios/useState */}
			<Route path="/home/createItemForm" render={props=><CreateItemForm {...props} userId={userId} edit={editItems} editCategory={editCategory} setEdit={setEditItems} setEditCategory={setEditCategory}/>} /> {/* to do: pass data/handlers from axios/useState */}
			<Route path="/home/createItemFormRevamp" render={props=><CreateItemFormRevamp {...props} userId={userId} edit={editItems} editCategory={editCategory} setEdit={setEditItems} setEditCategory={setEditCategory}/>} /> {/* to do: pass data/handlers from axios/useState */}
        </section>
    )
}

export default Home;
