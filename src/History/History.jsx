import React from 'react';
import './History.css';

const History = () => {
    const arrLocal = JSON.parse(localStorage.getItem('history'));
    return (
        <table className='history'>
        <tr className='HistoryLi'><td className='td'>Число</td><td className='td'>День</td><td className='td'>Вес</td><td className='td'>Разница</td></tr>
        {arrLocal.map((el)=><tr className='HistoryLi'><td className='td'>{el.dayNow}</td><td className='td'>{el.today}</td><td className='td'>{el.weight}</td><td className='td'>{el.differentWeight}</td></tr>)}
        </table>
    );
};

export default History;