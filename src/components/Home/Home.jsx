import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
// import Books from '../Books/Books';
 

const Home = () => {
    return (
        <div className='text-center'>
            <Navbar></Navbar>
          
           
            <Outlet></Outlet>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Home;