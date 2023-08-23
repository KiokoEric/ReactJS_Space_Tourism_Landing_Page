import React from 'react';
import "../Pilot/Pilot.css";
import { Header } from '../../Home/Header';
import Victor from "../../../Images/Crew/image-victor-glover.png"
import Footer from '../../Footer/Footer';


const Pilot = () => {
return (
    <div className='Pilot' >
        <Header />
        <article>
            <section>
                <h3> <span>02</span> Meet your crew</h3>
                <h4>Pilot</h4>
                <h3>Victor Glover</h3>
                <p>
                    Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.
                </p>
            </section>
            <section>
                <figure>
                    <img src={ Victor } alt="" width="450px" />
                </figure>
            </section>
        </article>
        <Footer />
    </div>
)
}

export default Pilot