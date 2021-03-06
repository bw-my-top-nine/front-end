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
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        axios.get(`https://top-nine.herokuapp.com/api/items/${props.category.id}/items`)
            .then(resp => {
                console.log(resp)
                setItems(resp.data)
            })
    }, [])

    return (
        <Container className="bg-secondary col-lg-6 my-3" hidden={deleted || !props.category.name.includes(props.search) ? true : false}>
            <Row>
                <img className="col-sm-3 p-0" src={props.category.thumbnail} alt={props.name} />
                <div className="col-sm-9 d-flex flex-column justify-content-center align-items-center align-items-sm-start">
                    <div className="d-flex align-items-center w-100">
                        <h3>{props.category.name}</h3>

                        <Button
                            className="bg-primary btn-sm mx-2 ml-auto"
                            onClick={() => {
                                props.setEditCategory(props.category)
                                props.history.push("/home/createcategoryform")
                            }}
                        >
                            Edit
                            </Button>
                        <Button
                            className="btn-danger btn-sm"
                            onClick={() => {
                                deleteCategory(props.category)
                                // to do: refresh lists (props drill or axios) or hide delete list (display:none)
                                setDeleted(true)
                            }}
                        >
                            Delete
                            </Button>

                    </div>
                    {props.category.description ? <p>{props.category.description}</p> : ''}
                    <Button
                        className="btn-success btn-sm"
                        disabled={(items.length >= 9) ? true : false}
                        onClick={() => {
                            // if (items && items[0]) {
                            //     props.setEditItems(items)
                            // }
                            props.setEditCategory(props.category)
                            props.history.push("/home/createItemFormRevamp")
                        }}
                    >
                        Add an Item
                    </Button>
                </div>
            </Row>
            {items.map(item => <Item key={item.id} item={item} items={items} setItems={setItems} {...props} />)}
        </Container>
    )
}

export default ItemList