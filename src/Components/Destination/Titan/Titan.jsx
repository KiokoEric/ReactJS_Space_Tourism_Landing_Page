import React from 'react';
import "../Europa/Europa.css"
import { Link } from 'react-router-dom';
import MoonTitan from "../../../Images/Destination/image-titan.png"
import { Header } from '../../Home/Header';

const Europa = () => {
return (
    <div className='Background' >
        <Header />
        <article className='Travel'>
            <section>
                <h3> <span>01</span> Pick your destination </h3>
                <figure>
                    <img src={ MoonTitan } alt="" width="450px" />
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
                <h2>Titan</h2>
                <p>
                The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                </p>
                <div className="Line"></div>
                <div className="TimeandDistance">
                    <section>
                        <h5>
                            Avg. distance
                        </h5>
                        <h4>
                            1.6 bil. km
                        </h4>
                    </section>
                    <section>
                        <h5>
                            Est. travel time
                        </h5>
                        <h4>
                            7 years
                        </h4>
                    </section>
                </div>
            </section>
        </article>
    </div>
    
)
}

export default Europa