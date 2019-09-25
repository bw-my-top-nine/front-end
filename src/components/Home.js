import React, {useState, useEffect} from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import { axiosWithAuth } from './axiosAuth';
import MyLists from './MyLists';
import CreateCategoryForm from './CreateCategoryForm';

function Home(props) {
//no props in home    
    console.log('props in Home', props);
    const userId = localStorage.getItem('userId')
//for the getData kind of useless rn
    const [edit, setEdit] = useState()
    const [userLists, setUserLists] = useState([])
//Axios call to get UserList, kind of useless a.t.m
//could use it to rerender something after updating serverdata? 
//    const getData = () => {
//        axiosWithAuth().get('/users')
//        .then(res => {
//            console.log(res)
//            setUsers(res.data)
//        })
//        .catch(err => console.log(err))
//    }

    // Not sure if called here or parent...

//1. axios call to get categories    
    useEffect(()=>{
        axios.get(`https://top-nine.herokuapp.com/api/categories/${userId}/categories`)
            .then(resp=>{
                console.log(resp)
                setUserLists(resp.data)
            })
            .catch(err=>{
                console.error(err)
            })
    },[])

//2. post request to post categories
    const createCategory = () => {
        axios.post('https://top-nine.herokuapp.com/api/categories/:id/categories')
        .then(resp => {
            console.log(resp)
            props.history.push('/home')
        })
    }
//3. axios call to get items
    const getItems = () => {
        axios.get('https://top-nine.herokuapp.com/api/items')
        .then(resp => {
            console.log(resp)
            setItemlist(resp.data)
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
    axios.put('https://top-nine.herokuapp.com/api/items/:id', newitemlist)
    .then(res => {
        console.log(res)
        props.history.push('/home')
    })
    
}
//7. deleting category 
//6. editing items
    const editItem = () => {
        axios.put
    }

    return (
        <section>
            <Route exact path="/home" render={props=><MyLists {...props} />} /> {/* to do: pass data/handlers from axios/useState */}
            <Route path="/home/createcategoryform" render={props=><CreateCategoryForm {...props} />} /> {/* to do: pass data/handlers from axios/useState */}
        </section>
    )
}

export default Home