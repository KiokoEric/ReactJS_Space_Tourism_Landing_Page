import React from 'react';
import "../SideBar/SideBar.css";
import { Link } from 'react-router-dom';

const SideBar = () => {
return (
    <div className='SideBar' >
        <ul>
            <Link to="/Technology" className='NavLink' >1</Link>
            <Link to="/Technology/Space_Capsule"  className='NavLink' >2</Link>
            <Link to="/Technology/Space_Port"  className='NavLink' >3</Link>
        </ul>
    </div>
)
}

export default SideBar