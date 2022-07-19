import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigasi from './Navbar/Navigasi';
import Container from './Container/Container';
import Body from './Body/Body';



const Component = () => {
    return (
        <div>
           <Navigasi />
           <Container />
           <Body />
        </div>
    )
}

export default Component;