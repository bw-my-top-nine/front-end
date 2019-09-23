import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap'
import axios from 'axios'
import '../bootstrap.min.css'

function CreateItem(props) {

    const [item, setItem] = useState({})

    function submitHandler(e) {
        e.preventDefault()
        // validation
            // to do
        // post
            // axios.post('backendURL')
            //     .then(resp => {
            //         console.log(resp)
            //         setItem({})
            //     })
            //     .catch(err => {
            //         console.error(err)
            //     })
    }

    function changeHandler(e) {
        setItem({...item, [e.target.name]: e.target.value})
    }

    return (
        <Form onSubmit={submitHandler}>
            <FormGroup>
                <Label className="text-left">
                    Name
                    <Input type="text" name="name" placeholder="Item Name" onChange={changeHandler} value={item.name} />
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="text-left">
                    Category
                    <Input type="text" name="category" placeholder="Item Category" onChange={changeHandler} value={item.category} />
                </Label>
            </FormGroup>
            <FormGroup>
                <Button>Submit</Button>
            </FormGroup>
        </Form>
    )
}

export default CreateItem