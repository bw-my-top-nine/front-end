import React, { useState } from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState({name: ''});

    const handleSearch = (e) => {
        console.log('this is in SearchHandle', e.target)
        setSearchValue({
            ...searchValue,
            [e.target.name]: e.target.value
        })
    }
    const resetInput = () => {
        setSearchValue('')
    }
    const searchSubmit = (e) => {
        e.preventDefault()
        console.log(searchValue)
        const newCategory = props.categories.filter(category => category.name === searchValue.name);
        console.log(newCategory);
        props.updateCategory(newCategory);
        resetInput()
    }
    return(
        <div>
            <form onSubmit={searchSubmit}>
                <input 
                type='text'
                name='name'
                placeholder='Search'
                // value={searchValue.name}
                onChange={(e)=>{props.setSearch(e.target.value)}}
                />
                <button>Search</button>
            </form>
        </div>   
    )
}

export default Search;