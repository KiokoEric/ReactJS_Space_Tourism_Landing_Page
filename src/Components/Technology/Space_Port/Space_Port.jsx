import React from 'react';
import "../Space_Port/Space_Port.css"
import { Header } from '../../Home/Header';
import SpacePort from "../../../Images/Technology/image-spaceport-portrait.jpg";
import SideBar from '../../SideBar/SideBar';

const Space_Port = () => {
return (
    <div className='SpacePort' >
        <Header />
        <article>
            <section>
                <h4> <span>03</span> Space Launch 101</h4>
                <h5>The Terminology...</h5>
                <h3>Spaceport</h3>
                <p>
                    A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
                </p>
            </section>
            <section>
                <figure>
                    <img src={ SpacePort } alt="" />
                </figure>
            </section>
        </article>
        <SideBar />
    </div>
)
}

export default Space_Port