import React, {useState, useEffect} from 'react'
import { Container, Row, Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ItemList from './ItemList';
import { axiosWithAuth } from './axiosAuth';

function Home(props) {
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

    return (
        <section>
            <h2>My Lists <Button className="bg-success" tag={Link} to="/CreateCategoryForm">Create a New List</Button></h2>
            <Container>
    {/*<button onClick={handleLogOut}>Log Out Yourself!</button>*/}
                <Row>
                    {/* {userLists.map(list=><div className="col-sm-3"><ItemList {...list} /></div>)} */}
                </Row>
                <Pagination>
                    <PaginationItem>
                        <PaginationLink className="bg-secondary" first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="bg-secondary" previous href="#" />
                    </PaginationItem>
                    {/* to do: map nearby page numbers from current page */}
                    <PaginationItem>
                        <PaginationLink className="bg-secondary" next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="bg-secondary" last href="#" />
                    </PaginationItem>
                </Pagination>
            </Container>
        </section>
    )
}

export default Home