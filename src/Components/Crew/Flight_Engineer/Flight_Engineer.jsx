import React from 'react';
import "../Flight_Engineer/Flight_Engineer.css";
import { Header } from '../../Home/Header';
import  Ansari from "../../../Images/Crew/image-anousheh-ansari.png";
import Footer from '../../Footer/Footer';

const Flight_Engineer = () => {
return (
    <div className='Flight_Engineer' >
        <Header />
        <article>
            <section>
                <h3> <span>02</span> Meet your crew</h3>
                <h4>Flight Engineer</h4>
                <h3>Anousheh Ansari</h3>
                <p>
                    Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
                </p>
            </section>
            <section>
                <figure>
                    <img src={ Ansari } alt="" width="480px" />
                </figure>
            </section>
        </article>
        <Footer />
    </div>
)
}

export default Flight_Engineer