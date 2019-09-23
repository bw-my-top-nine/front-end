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
        <Navbar className="navbar-dark bg-dark">
            <NavbarBrand tag={Link} to="/">My Top Nine</NavbarBrand>
            <Nav className="mr-auto">
                <NavItem>
                    <NavLink className="text-light" tag={Link} to="/categories">Categories</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-light" tag={Link} to="/items">Items</NavLink>
                </NavItem>
            </Nav>
            {/* logged in user stuff ? */}
        </Navbar>
    )
}

export default Header