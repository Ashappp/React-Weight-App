import React from 'react';
import './Weight.css'
import {Line} from 'react-chartjs-2';

const Weight = () => {
    const line = JSON.parse(localStorage.getItem('history'))
    const filterWeight = line.map(el=>el.weight)
    const filterData = line.map(el=>el.dayNow)
const data = {
    labels:[...filterData],
    datasets:[{
        label:'App',
        data:[...filterWeight],
        backgroundColor:"rgba(100, 150, 150, 0.2)",
        borderColor:'black',
    }]
}


    return (
        <div>
        <Line data={data}/>
        </div>
    );
};

export default Weight;