import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { axiosWithAuth } from "./axiosAuth";
import MyLists from "./MyLists";
import CreateCategory from "./CreateCategoryForm";
import CreateItemForm from "./CreateItemForm";

function Home(props) {
//no props in home    
    console.log('props in Home', props);
    const userId = localStorage.getItem('userId')
//for the getData kind of useless rn
	const [editCategory, setEditCategory] = useState()
    const [editItems, setEditItems] = useState()
    //gets set in Search.js and passed down in MyList
    const [searched, setSearched] = useState()
    // const [userLists, setUserLists] = useState([])

//1. axios call to get categories    
    // moved to MyLists.js

//3. axios call to get items
    const getItems = () => {
        axios.get('https://top-nine.herokuapp.com/api/items')
        .then(resp => {
            console.log(resp)
            //setItemlist(resp.data)
        })
    }


//4. post request to post items
const addItem = () => {
    //takes in itemList
    axios.post('https://top-nine.herokuapp.com/api/items/:id/items')
    .then(resp => {
        props.history.push('')
    })
}
//5. put request to edit category
const saveEdit = (e) => {
    //takes in updatedcategory
    axios.put('https://top-nine.herokuapp.com/api/items/:id')
    .then(res => {
        console.log(res)
        props.history.push('/home')
    })
    
}
//7. deleting category 
	// moved to ItemList.js

//6. editing items
    const editItem = () => {
        axios.put('https://top-nine.herokuapp.com/api/items/:id')
    }

    return (
        <section>
            <Route exact path="/home" render={props=><MyLists {...props} userId={userId} setEditCategory={setEditCategory} setEditItems={setEditItems} />} /> {/* to do: pass data/handlers from axios/useState */}
			<Route path="/home/createcategoryform" render={props=><CreateCategory {...props} userId={userId} edit={editCategory} setEdit={setEditCategory} />} /> {/* to do: pass data/handlers from axios/useState */}
			<Route path="/home/createItemForm" render={props=><CreateItemForm {...props} userId={userId} edit={editItems} setEdit={setEditItems}/>} /> {/* to do: pass data/handlers from axios/useState */}
        </section>
    )
}

export default Home;
