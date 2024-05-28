import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav id='link' className='text-xl bottom-10'>
                <Link id='home-border' className='text-xl ' to= "/">Home</Link>
                <Link id='ListedBooks' className='text-xl ' to="/ListedBooks">Listed Books</Link>
                <Link className='text-xl ' to="/PagestoRead">Pages to Read</Link>
                <Link id='pop-lit' className='text-xl ' to="/PopularLiterature">Popular Literature</Link>
                <Link id='webinner' className='text-xl ' to="/Webinar">Webinar</Link>
                 
            </nav>
        </div>
    );
};

export default Header;