import React from 'react';
import "../Commander/Commander.css";
import { Header } from '../../Home/Header';
import Douglas from "../../../Images/Crew/image-douglas-hurley.png"
import Footer from '../../Footer/Footer';

const Commander = () => {
return (
    <div className='Commander' >
        <Header />
        <article>
            <section>
                <h3> <span>02</span> Meet your crew</h3>
                <h4>Commander</h4>
                <h3>Douglas Hurley</h3>
                <p>
                Douglas Hurley Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                </p>
            </section>
            <section>
                <figure>
                    <img src={ Douglas } alt="" width="450px" />
                </figure>
            </section>
        </article>
        <Footer />
    </div>
)
}

export default Commander