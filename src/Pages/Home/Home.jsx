import React from 'react';
import "../../Pages/Home/Home.css"
import { Header } from '../../Components/Home/Header';
import Main from '../../Components/Home/Main';



const Home = () => {
return (
    <div className='Home' >
        <Header />
        <Main />
    </div>
)
}

export default Home