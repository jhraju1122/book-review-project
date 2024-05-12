import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Books from '../Books/Books';
 

const Home = () => {
    return (
        <div className='text-center'>
            <Navbar></Navbar>
           <Books></Books>
            Hellow i am from home
            <Outlet></Outlet>
        </div>
    );
};

export default Home;