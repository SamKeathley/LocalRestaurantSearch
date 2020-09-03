import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';


const Nav = styled.nav`
    width: 100%;
    height: 65px;
    border-button: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
`

const logostyle = {
    position: "absolute",
    width: "60px",
    height: "60px",
    left: "18px",
    top: "17px"
}

const searchStyleLeft = {
    position: "absolute",
    width: "376px",
    height: "27px",
    left: "401px",
    top: "32px"
}

const searchStyleRight = {
    position: "absolute",
    width: "376px",
    height: "27px",
    left: "800px",
    top: "32px"
}

const Navbar = () => {
    return (
        <Nav>
            <Link to="/"><img src={require("../../assets/logo.png")} alt="reStore" style={logostyle} /></Link>
            <FormControl type="text" placeholder="Where" className="mr-sm-2" style={searchStyleLeft} /><FormControl type="text" placeholder="What" className="mr-sm-2" style={searchStyleRight} />
            <Burger />
        </Nav>
    );
};

export default Navbar;