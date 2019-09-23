import React from 'react'
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
                    <NavLink>Log-in</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Header