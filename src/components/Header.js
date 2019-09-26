import React from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import { withRouter } from 'react-router-dom';

function Header(props) {
    //logs you out, by clearing local storage of token and pushing you to login page currently don't have props
    const handleLogOut = () => {
        localStorage.removeItem('token')
        props.history.push('/')
    }
    return (
        <Navbar className="navbar-dark bg-dark mb-2">
            <NavbarBrand tag={Link} to="/home">My Top Nine</NavbarBrand>
            {/* <Nav className="mr-auto">
                <NavItem>
                    <NavLink className="text-light" tag={Link} to="/categories">Categories</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-light" tag={Link} to="/items">Items</NavLink>
                </NavItem>
            </Nav> */}
            {/* logged in user stuff ? */}
            <button className="bg-success" onClick={handleLogOut}>Log Out</button>
        </Navbar>
    )
}

export default withRouter(Header)