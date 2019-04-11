import React from 'react';
import './Menu.css';
import {NavLink} from 'react-router-dom';

const Menu = ({imtMan}) => {
    return (
        <div className='Menu'>
          <NavLink onClick={imtMan} to='/IMT' className='titleMenu'>IMT</NavLink>
          <NavLink  to='/Weight'className='titleMenu'>Weight</NavLink>
          <NavLink to='/History' className='titleMenu'>History</NavLink>
        </div>
    );
};

export default Menu;