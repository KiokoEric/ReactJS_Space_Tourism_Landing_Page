import React from 'react';
import "../Space_Capsule/Space_Capsule.css";
import { Header } from '../../Home/Header';
import SpaceCapsule from "../../../Images/Technology/image-space-capsule-portrait.jpg"
import SideBar from '../../SideBar/SideBar';

const Space_Capsule = () => {
return (
    <div className='Space-Capsule' >
        <Header />
        <article>
            <section>
                <h4> <span>03</span> Space Launch 101</h4>
                <h5>The Terminology...</h5>
                <h3>Space Capsule</h3>
                <p>
                    A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
                </p>
            </section>
            <section>
                <figure>
                    <img src={ SpaceCapsule } alt="" />
                </figure>
            </section>
        </article>
        <SideBar />
    </div>
)
}

export default Space_Capsule