import React, { useState, useEffect } from 'react'
import { Container, Row, Button } from 'reactstrap'
import axios from 'axios'

import Item from './Item'

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
                        <Button className="bg-primary btn-sm mx-2" onClick={()=>{props.editCategory(props.category)}}>Edit</Button>
                        <Button className="btn-danger btn-sm" onClick={()=>{props.deleteCategory(props.category)}}>Delete</Button>
                    </div>
                    {props.description?<p>{props.description}</p>:''}
                    <Button className="btn-success" onClick={()=>{props.editItems(props.category)}}>Add/Edit Items</Button>
                </div>
            </Row>
            {items.map(item => <Item key={item.id} {...item} />)}
        </Container>
    )
}

export default ItemList