import React from 'react';
import "../Footer/Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
return (
    <div className='Footer' >
        <section >
            <Link to="/Crew"  className='Navigate' ></Link>
            <Link to="/Crew/Mission_Specialist"  className='Navigate' ></Link>
            <Link to="/Crew/Pilot"  className='Navigate' ></Link>
            <Link to="/Crew/Flight_Engineer"  className='Navigate' ></Link>
        </section>
    </div>
)
}

export default Footer