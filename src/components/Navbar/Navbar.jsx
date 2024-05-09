import React from 'react';

const Navbar = () => {
    return (
        
        <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Book Vibe</a>
        </div>

        
        <div class="flex-none w-[250px]">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Sign In</a>
        </div>
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Sign Up</a>
        </div>
        </div>
        </div>
        
    
       
    );
};

export default Navbar;