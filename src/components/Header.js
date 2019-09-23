import React from 'react'
import {Link} from 'react-router-dom'
import { 
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

function Header(props) {
    return (
        <Navbar>
            <NavbarBrand>My Top Nine</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink tag={Link} to="/login">Log-in</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Header