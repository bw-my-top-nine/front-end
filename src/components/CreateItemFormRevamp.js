import React, { useState, useEffect } from "react"
import { Form, FormGroup, Input, Button } from "reactstrap"
import axios from "axios"


function CreateItemFormRevamp(props) {
    const [item, setItem] = useState({name:"", thumbnail:""})

    function changeHandler(e) {
        setItem({...item, [e.target.name]: String(e.target.value)})
    }

    function submitHandler(e) {
        const data = {...item}
		if (!data.thumbnail) delete data.thumbnail
        e.preventDefault()
        if (props.edit) {
            axios.put(`https://top-nine.herokuapp.com/api/items/${props.edit.id}`, data)
                .then(resp => {
                    console.log(resp)
                    props.setEdit()
                    props.setEditCategory()
                    props.history.push("/home")
                })
                .catch(console.error)
        }
        else {
            axios.post(`https://top-nine.herokuapp.com/api/items/${props.editCategory.id}/items`, data)
                .then(resp => {
                    console.log(resp)
                    props.setEditCategory()
                    props.history.push("/home")
                })
                .catch(console.error)
        }
    }

    useEffect(()=>{
        if (props.edit) {
            setItem({name: props.edit.name, thumbnail: props.edit.thumbnail})
        }
    },[props])

    return (
        <Form className="col-sm-6 mx-auto" onSubmit={submitHandler}>
            <h4>{props.edit?'Edit':'Add'} an Item</h4>
            <FormGroup>
                <Input type="text" name="name" placeholder="Item Name" onChange={changeHandler} value={item.name} required />
            </FormGroup>
            <FormGroup>
                <Input type="url" name="thumbnail" placeholder="Item Thumbnail URL (optional)" onChange={changeHandler} value={item.thumbnail} />
            </FormGroup>
            <FormGroup className="text-left">
                <Button className="bg-primary" type="submit">Submit</Button>
            </FormGroup>
        </Form>
    )
}

export default CreateItemFormRevamp