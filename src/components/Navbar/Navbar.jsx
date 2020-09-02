import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Burger from './Burger';


const Nav = styled.nav`
    width: 100%;
    height: 65px;
    border-button: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
`
const Navbar = () => {
    return (
        <Nav>
            <div>reStore</div>
            <Burger />
        </Nav>
    );
};

export default Navbar;