import React, {useState, useEffect} from 'react'
import { Container, Row, Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ItemList from './ItemList';

function Home(props) {
    const [userLists, setUserLists] = useState([])

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