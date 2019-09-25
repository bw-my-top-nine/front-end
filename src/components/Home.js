import React, {useState, useEffect} from 'react'
import { Container, Row, Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ItemList from './ItemList';
import { axiosWithAuth } from './axiosAuth';

function Home(props) {
    localStorage.getItem('userId')
//no props in home    
    console.log('props in Home', props);
//for the getData kind of useless rn
//    const [users, setUsers] = useState()
    const [userLists, setUserLists] = useState([])
//Axios call to get UserList, kind of useless a.t.m
//    const getData = () => {
//        axiosWithAuth().get('/users')
//        .then(res => {
//            console.log(res)
//            setUsers(res.data)
//        })
//        .catch(err => console.log(err))
//    }
//logs you out, by clearing local storage of token and pushing you to login page currently don't have props
//    const handleLogOut = () => {
//        getData();
//        localStorage.removeItem('token')
//        props.history.push('/')
//    }

    // Not sure if called here or parent...
    // useEffect(()=>{
    //     axios.get('backend-url')
    //         .then(resp=>{
    //             console.log(resp)
    //         })
    //         .catch(err=>{
    //             console.error(err)
    //         })
    // },[])

    const props_mockup = {
        id: 5,
        name: 'category',
        description: 'Hello world!',
        thumbnail: 'https://i.imgur.com/4AiXzf8.jpg',
        items: [
            {
                id: 9,
                name: 'item1',
                thumbnail: 'https://i.imgur.com/4AiXzf8.jpg'
            },
            {
                id: 10,
                name: 'item2',
                thumbnail: 'https://i.imgur.com/4AiXzf8.jpg'
            }
        ]
    }

    return (
        <section>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <h2>My Lists</h2>
                    <Button className="btn-success btn-sm ml-3" tag={Link} to="/CreateCategoryForm">Add New List</Button>
                </Row>
                <Row>
                    {/* {userLists.map(list=><div className="col-lg-6"><ItemList {...list} /></div>)} */}
                    <div className="col-lg-6"><ItemList {...props_mockup} /></div>
                </Row>
                <Pagination className="d-flex justify-content-center">
                    <PaginationItem>
                        <PaginationLink className="bg-primary" first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="bg-primary" previous href="#" />
                    </PaginationItem>
                    {/* to do: map nearby page numbers from current page */}
                    <PaginationItem>
                        <PaginationLink className="bg-primary" next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="bg-primary" last href="#" />
                    </PaginationItem>
                </Pagination>
            </Container>
        </section>
    )
}

export default Home