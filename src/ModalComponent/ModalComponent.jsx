import React from 'react';
import './ModalComponent.css'
import {NavLink} from 'react-router-dom';


const ModalComponent =({desiredWeight,setItemLocal,cancelChanges,modalData,growth,weight,date})=> {
    return (
        <div className='modalComp'>
            <h2>Введите данные</h2>
            <input className='input'value={growth} onChange={modalData} type="number" name="growth" placeholder='Рост'/>
            <input className='input'value={weight} onChange={modalData} type="number" name="weight" placeholder='Вес'/>
            <input className='input'value={date} onChange={modalData} type="date" name="date" placeholder='Дата'/>
            <input className='input'value={desiredWeight} onChange={modalData} type="number" name="desiredWeight" placeholder='Желаемый вес'/>
            <div className='gender'>
            <p>Ds,th</p>
            <input className='input' value='Famele' onChange={modalData} type="radio" name="gender"/>
            <input className='input' value='Mele' onChange={modalData} type="radio" name="gender"/>
            </div>

            {growth && weight && date? <NavLink to='/IMT' className='btn' onClick={setItemLocal}>Ввод</NavLink>:null}
            <button className='btn' onClick={cancelChanges}>Скасуваты</button>
        </div>
    );
};

export default ModalComponent;