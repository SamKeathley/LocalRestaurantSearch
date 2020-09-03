import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
    flex-flow: column nowrap;
    background-color: #FED8B4;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -10px;
    right: 0;
    height: 90vh;
    width: 380px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    border-top-left-radius: 2.5%;
    border-bottom-left-radius: 2.5%;
    margin-top: 10px;
    li {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
    }
  
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/form"><li>Join in as a restaurant owner</li></Link>
      <li>Saved</li>
      <li>Help</li>
      <Link to="/about"><li>About us</li></Link>
    </Ul>
  )
}

export default RightNav;