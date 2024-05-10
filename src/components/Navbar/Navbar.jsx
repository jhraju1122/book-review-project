import React from 'react';

const Navbar = () => {
    return (
        
        <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost text-2xl font-bold ">Book Vibe</a>
        </div>
         

         <div className='text-center w-[700px] font-bold text-xl gap-8'>
          <a className='text-green-400 border-spacing-4' href="#">Home</a>
          <a href="#">Listed Books</a>
          <a href="#">Pages to Read</a>
         </div>

        
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