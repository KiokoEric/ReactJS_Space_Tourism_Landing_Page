import React from 'react';
import "../Mission_Specialist/Mission_Specialist.css"
import { Header } from '../../Home/Header';
import Mark from "../../../Images/Crew/image-mark-shuttleworth.png"
import Footer from '../../Footer/Footer';

const Mission_Specialist = () => {
return (
    <div className='Mission_Specialist' >
        <Header /> 
        <article>
            <section>
                <h3> <span>02</span> Meet your crew</h3>
                <h4>Mission Specialist</h4>
                <h3>Mark Shuttleworth</h3>
                <p>
                Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
                </p>
            </section>
            <section>
                <figure>
                    <img src={ Mark } alt="" width="420px" />
                </figure>
            </section>
        </article>
        <Footer />
    </div>
)
}

export default Mission_Specialist