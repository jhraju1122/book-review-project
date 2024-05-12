import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className='text-center'>
           <Header></Header>
            Hellow i am from home
            <Outlet></Outlet>
        </div>
    );
};

export default Home;