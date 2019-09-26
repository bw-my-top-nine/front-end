import React from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Row,
	Button,
	Pagination,
	PaginationItem,
	PaginationLink
} from "reactstrap";

import ItemList from "./ItemList";

function MyLists(props) {
    return (
        <Container>
            <Row className="justify-content-center align-items-center">
                <h2>My Lists</h2>
                <Button className="btn-success btn-sm ml-3" tag={Link} to="/home/createcategoryform">Add New List</Button>
            </Row>
            <Row>
                {
                    props.categories.map(category => {
                        return (
                            <div className="col-lg-6" key={category.id}>
                                <ItemList
                                {...props}
                                category={category}
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
