import React, { useState } from 'react';

const Search = (props) => {
    const [search, setSearch] = useState();
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    return(
        <div>
            <form>
                <input 
                type='text'
                name='search'
                value={props.name}
                onChange={handleSearch}
                />
            </form>
        </div>   
    )
}

export default Search;