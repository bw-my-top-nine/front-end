import React from 'react'
import { Link } from 'react-router-dom'
import { 
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

function Header(props) {
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
        </Navbar>
    )
}

export default Header