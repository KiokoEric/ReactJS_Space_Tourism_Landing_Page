import React from 'react';
import "../Europa/Europa.css"
import { Link } from 'react-router-dom';
import MoonEuropa from "../../../Images/Destination/image-europa.png"
import { Header } from '../../Home/Header';

const Europa = () => {
return (
    <div className='Background' >
        <Header />
        <article className='Travel'>
            <section>
                <h3> <span>01</span> Pick your destination </h3>
                <figure>
                    <img src={ MoonEuropa } alt="" width="450px" />
                </figure>
            </section>
            <section>
                <nav>
                    <Link to="/Destination" className='TravelLink'>
                        Moon
                    </Link>
                    <Link to="/Destination/Mars" className='TravelLink'>
                        Mars
                    </Link>
                    <Link to="/Destination/Europa"  className='TravelLink'>
                        Europa
                    </Link>
                    <Link to="/Destination/Titan" className='TravelLink'>
                        Titan
                    </Link>
                </nav>
                <h2>Europa</h2>
                <p>
                    The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                </p>
                <div className="Line"></div>
                <div className="TimeandDistance">
                    <section>
                        <h5>
                            Avg. distance
                        </h5>
                        <h4>
                            628 mil. km
                        </h4>
                    </section>
                    <section>
                        <h5>
                            Est. travel time
                        </h5>
                        <h4>
                            3 years
                        </h4>
                    </section>
                </div>
            </section>
        </article>
    </div>
    
)
}

export default Europa