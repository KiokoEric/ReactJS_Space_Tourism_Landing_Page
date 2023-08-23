import React from 'react';
import "../Home/Header.css";
import { Link } from 'react-router-dom';
import Logo from "../../Images/Shared_Assets/logo.svg"

export const Header = () => {
return (
    <div className='Header' >
        <section>
            <figure>
                <img src={Logo} alt="" />
            </figure>
        </section>
        <section>
            <div className='Line' ></div>
        </section>
        <section>
            <nav>
                <ul>
                    <Link to="/" >
                        00 <span>Home</span> 
                    </Link>
                    <Link to="/Destination" >
                        01 <span>Destination</span> 
                    </Link>
                    <Link to="/Crew" >
                        02 <span>Crew</span> 
                    </Link>
                    <Link to="/Technology" >
                        03 <span>Technology</span> 
                    </Link>
                </ul>
            </nav>
        </section>
    </div>
)
}