import React from 'react';
import "../Mars/Mars.css"
import { Link } from 'react-router-dom';
import PlanetMars from "../../../Images/Destination/image-mars.png"
import { Header } from '../../Home/Header';

const Mars = () => {
return (
    <div className='Background' >
        <Header />
        <article className='Travel'>
            <section>
                <h3> <span>01</span> Pick your destination </h3>
                <figure>
                    <img src={ PlanetMars } alt="" width="450px" />
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
                <h2>Mars</h2>
                <p>
                    Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                </p>
                <div className="Line"></div>
                <div className="TimeandDistance">
                    <section>
                        <h5>
                            Avg. distance
                        </h5>
                        <h4>
                            225 mil. km
                        </h4>
                    </section>
                    <section>
                        <h5>
                            Est. travel time
                        </h5>
                        <h4>
                            9 months
                        </h4>
                    </section>
                </div>
            </section>
        </article>
    </div>
    
)
}

export default Mars