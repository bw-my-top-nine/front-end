import React, {useState, useEffect} from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import { axiosWithAuth } from './axiosAuth';
import MyLists from './MyLists';
import CreateCategoryForm from './CreateCategoryForm';

function Home(props) {
//no props in home    
    console.log('props in Home', props);
//for the getData kind of useless rn
    const [edit, setEdit] = useState()
    const [userId, setUserId] = useState(localStorage.getItem('userId'))
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

    function handleSubmit(category) {
        if (edit) {
            // axios put category
            // axios put items
            setEdit()
        }
        else {
            // axios post category
            // axios post items
        }
        props.history.push("/home")
    }

    // Not sure if called here or parent...
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

    return (
        <section>
            <Route exact path="/home" render={props=><MyLists {...props} categories={userLists} setEdit={setEdit} userId={userId} />} /> {/* to do: pass data/handlers from axios/useState */}
            <Route path="/home/createcategoryform" render={props=><CreateCategoryForm {...props} edit={edit} handleSubmit={handleSubmit} />} /> {/* to do: pass data/handlers from axios/useState */}
        </section>
    )
}

export default Home