import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import axios from 'axios'

import Item from './Item'

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
        <Table className="bg-secondary">
            <thead className="container row">
                {props_mockup.thumbnail?<img className="col-sm-3" src={props_mockup.thumbnail} alt={props_mockup.name} />:''}
                <div className="col-sm-9 text-left">
                    <h3>My Top Nine {props_mockup.name}</h3>
                    {props_mockup.description?<p>{props_mockup.description}</p>:''}
                    {/* add edit and delete buttons */}
                </div>
            </thead>
            <tbody>
                {props_mockup.items.map(item => <tr key={item.id} className="table-dark"><Item {...item} /></tr>)}
            </tbody>
        </Table>
    )
}

export default ItemList