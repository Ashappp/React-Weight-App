import React from 'react';
import './ModalPlus.css';
import {NavLink} from 'react-router-dom';

const ModalPlus = ({modalData,weight,addWeight,x}) => {
    return (
        <div className='ModalPlus'>
        <input type="text" name='weight' onChange={x} value={weight} placeholder='Введите Ваш вес'/>
        <NavLink to='/IMT' className='' onClick={addWeight}>Ок</NavLink>
        </div> );
};

export default ModalPlus;