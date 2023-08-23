import React from 'react';
import "../Home/Header.css"
import Logo from "../../Images/Shared_Assets/logo.svg"
import { Link } from 'react-router-dom';

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
                    <Link to="/" className='Link First' >  
                        00 <span>Home</span> 
                    </Link>
                    <Link to="Destination" className='Link' >
                        01 <span>Destination</span> 
                    </Link>
                    <Link to="Crew" className='Link' >
                        02 <span>Crew</span> 
                    </Link>
                    <Link to="Technology" className='Link' >
                        03 <span>Technology</span> 
                    </Link>
                </ul>
            </nav>
        </section>
    </div>
)
}
