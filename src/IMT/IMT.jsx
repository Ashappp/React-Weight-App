import React from 'react';
import './IMT.css';
import ReactSpeedometer from "react-d3-speedometer";

const IMT = () => {
    const imt = JSON.parse(localStorage.getItem('imt'))
    const localData = JSON.parse(localStorage.getItem('history'))
    const currentWeight = localData[localData.length-1].weight
    const desiredWeight = localData[0].desiredWeight
     return (
        <div className='Imt'>
            <div className='divImt'>
            <p className = 'imtInfo'>{currentWeight}</p>
            <p className = 'imtInfo'>{desiredWeight}</p>
            </div>
            <div className='divSpeedometer'>
            <ReactSpeedometer
            minValue={0}
            maxValue={50}
            value={imt}
            needleColor="green"
            startColor="lightgreen"
            segments={15}
            endColor="red"/>
            </div>
        </div>
    );
};

export default IMT;