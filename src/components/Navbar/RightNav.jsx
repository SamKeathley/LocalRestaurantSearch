import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
    flex-flow: column nowrap;
    background-color: #FD835C;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -15px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
    }
  
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Join in as a restaurant owner</li>
      <li>Saved</li>
      <li>Help</li>
      <li>About us</li>
    </Ul>
  )
}

export default RightNav;