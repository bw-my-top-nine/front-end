import React, { useState, useEffect } from 'react'
import { Container, Row, Button } from 'reactstrap'
import axios from 'axios'

import Item from './Item'

function ItemList(props) {
    // const [items, setItems] = useState([])

    // useEffect(()=>{
    //     axios.get('backend-url')
    //         .then(resp=>{
    //             console.log(resp)
    //         })
    //         .catch(err=>{
    //             console.error(err)
    //         })
    // }, [])

    return (
        <Container className="bg-secondary">
            <Row>
                {props.thumbnail?<img className="col-sm-3" src={props.thumbnail} alt={props.name} />:''}
                <div className="col-sm-9 text-left">
                    <h3>
                        {props.name}
                        <Button className="bg-primary mx-2">Edit</Button>
                        <Button className="btn-danger">Delete</Button>
                    </h3>
                    {props.description?<p>{props.description}</p>:''}
                </div>
            </Row>
            {props.items.map(item => <Item key={item.id} {...item} />)}
        </Container>
    )
}

export default ItemList