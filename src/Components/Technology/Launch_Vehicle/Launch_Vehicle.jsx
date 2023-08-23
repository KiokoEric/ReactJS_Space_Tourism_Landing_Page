import React from 'react';
import "../Launch_Vehicle/Launch_Vehicle.css"
import { Header } from '../../Home/Header';
import Vehicle from "../../../Images/Technology/image-launch-vehicle-portrait.jpg"
import SideBar from '../../SideBar/SideBar';

const Launch_Vehicle = () => {
return (
    <div className='Vehicle-Launch' >
        <Header />
        <article>
            <section>
                <h4> <span>03</span> Space Launch 101</h4>
                <h5>The Terminology...</h5>
                <h3>Launch Vehicle</h3>
                <p>
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                </p>
            </section>
            <section>
                <figure>
                    <img src={ Vehicle } alt="" />
                </figure>
            </section>
        </article>
        <SideBar />
    </div>
)
}

export default Launch_Vehicle