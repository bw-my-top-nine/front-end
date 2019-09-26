import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Row,
	Button,
	Pagination,
	PaginationItem,
	PaginationLink
} from "reactstrap";
import axios from "axios";
import Search from './Search'
import ItemList from "./ItemList";

function MyLists(props) {
    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        // not sure if this is necessary
        // clear edit status if navigated back to home without submitting
        props.setEditCategory()
        props.setEditItems()
        
        // moved to trigger only on /home not /home/createCategoryForm
        axios.get(`https://top-nine.herokuapp.com/api/categories/${props.userId}/categories`)
            .then(resp=>{
                console.log(resp)
                setCategories(resp.data)
            })
            .catch(err=>{
                console.error(err)
            })
    },[])
    console.log('!!!Category in myList', categories);
    return (
        <Container>
            <Row className="justify-content-center align-items-center">
                <h2>My Lists</h2>
                <Button className="btn-success btn-sm ml-3" tag={Link} to="/home/createcategoryform">Add New List</Button>
            </Row>
            <Row>
                <Search setSearch={setSearch} categories={categories} updateCategory={setCategories}/>
                {
                    categories.map(category => {
                        return (
                            <div className="col-lg-6" key={category.id}>
                                <ItemList
                                {...props}
                                category={category}
                                search={search}
                                />
                            </div>
                        )
                    })
                }
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
    )
}

export default MyLists;
