import React from 'react';
import "../Travel/Travel.css"
import { Link, Outlet } from 'react-router-dom';
import Moon from "../../../Images/Destination/image-moon.png"

const Travel = () => {
return (
    <article className='Travel' >
        <section>
            <h3> <span>01</span> Pick your destination </h3>
            <figure>
                <img src={ Moon } alt="" width="450px" />
            </figure>
        </section>
        <section>
            <nav>
                <Link className='TravelLink'>
                    Moon
                </Link>
                <Link to="/Destination/Mars" className='TravelLink'>
                    Mars
                </Link>
                <Link to="/Destination/Europa" className='TravelLink'>
                    Europa
                </Link>
                <Link to="/Destination/Titan" className='TravelLink'>
                    Titan
                </Link>
            </nav>
            <h2>Moon</h2>
            <p>
            See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
            </p>
            <div className="Line"></div>
            <div className="TimeandDistance">
                <section>
                    <h5>
                        Avg. distance
                    </h5>
                    <h4>
                        384,400 km
                    </h4>
                </section>
                <section>
                    <h5>
                        Est. travel time
                    </h5>
                    <h4>
                        3 days
                    </h4>
                </section>
            </div>
        </section>
        <Outlet />
    </article>
)
}

export default Travel