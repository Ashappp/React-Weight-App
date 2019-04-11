import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

const Header = ({}) => {
    return (
        <div className='header'>
            <p className="">aktiBMI</p>
            <NavLink to='/ModalPlus' className='btnHeader'>+</NavLink>
        </div>
    );
};

export default Header;