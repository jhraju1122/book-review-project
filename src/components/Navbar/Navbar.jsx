import React from 'react';
import Header from '../Header/Header';

const Navbar = () => {
    return (
        
        <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost text-2xl font-bold ">Book Vibe</a>
        </div>
         
         <Header></Header>

        
        <div class="flex-none w-[250px]">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl bg-green-400 text-white font-bold">Sign In</a>
        </div>
        <div class="flex-1">
          <a class="btn btn-ghost text-xl bg-[#59C6D2]  text-white font-bold">Sign Up</a>
        </div>
        </div>
        </div>
        
    
       
    );
};

export default Navbar;