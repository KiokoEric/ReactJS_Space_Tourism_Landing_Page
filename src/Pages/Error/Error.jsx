import React from 'react';
import "../Error/Error.css"
import { Header } from '../../Components/Home/Header'

const Error = () => {
return (
    <div className='Error'>
        <Header />
        <h3>The page does not exist. Kindly try again.</h3>
    </div>
)
}

export default Error