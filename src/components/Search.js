import React from 'react';

const Search = (props) => {
    return(
        <div>
            <form>
                <input 
                type='text'
                name='name'
                placeholder='Search'
                // value={searchValue.name}
                onChange={(e)=>{props.setSearch(e.target.value)}}
                />
            </form>
        </div>   
    )
}

export default Search;