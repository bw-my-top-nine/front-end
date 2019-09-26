import React, { useState, useEffect } from 'react'
import { Container, Row, Button } from 'reactstrap'
import axios from 'axios'

import Item from './Item'

//7. deleting category 
const deleteCategory = (category) => {
    axios.delete(`https://top-nine.herokuapp.com/api/categories/${category.id}`)
        .then(console.log)
        .catch(console.error)
}

function ItemList(props) {
    const [items, setItems] = useState([])
    
    // useEffect(()=>{
    //     axios.get('backend-url')
    //         .then(resp=>{
    //             console.log(resp)
    //         })
    //         .catch(err=>{
    //             console.error(err)
    //         })
    // }, []) 
//    const handleEdit = (e) => {
//        e.target.value
//    }

    return (
        <Container className="bg-secondary">
            <Row>
                {props.thumbnail?<img className="col-sm-3 p-0" src={props.thumbnail} alt={props.name} />:''}
                <div className="col-sm-9 d-flex flex-column justify-content-center align-items-center align-items-sm-start">
                    <div className="d-flex align-items-center">
                        <h3>{props.name}</h3>
                        <Button
                            className="bg-primary btn-sm mx-2"
                            onClick={()=>{
                                props.setEditCategory(props.category)
                                props.history.push("/home/createcategoryform")
                            }}
                        >
                            Edit
                        </Button>
                        <Button className="btn-danger btn-sm" onClick={()=>{deleteCategory(props.category)}}>Delete</Button>
                    </div>
                    {props.description?<p>{props.description}</p>:''}
                    <Button className="btn-success" onClick={()=>{props.setEditItems(props.category)}}>Add/Edit Items</Button>
                </div>
            </Row>
            {items.map(item => <Item key={item.id} {...item} />)}
        </Container>
    )
}

export default ItemList