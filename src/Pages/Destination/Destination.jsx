import React from 'react';
import "../Destination/Destination.css"
import { Header } from '../../Components/Home/Header';
import Travel from '../../Components/Destination/Travel/Travel';

const Destination = () => {
return (
    <div className='Destination' >
        <Header />
        <Travel />
    </div>
)
}

export default Destination