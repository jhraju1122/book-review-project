import React from 'react';
import { Link } from 'react-router-dom';

const ListedBooks = () => {
    return (
        <div>
            {/* <h1 id='Bookslist'>Books</h1>
            <Link id='sortby' className='btn'> */}
    <div id='sortby' className="join">
    <select className="select select-bordered join-item">
    <option disabled selected>Sort By</option>
    <option>Rating</option>
    <option>Number of pages</option>
    <option>Publishar year</option>
  </select>
            </div>
            {/* </Link> */}

            {/* tab  */}
            <div role="tablist" class="tabs tabs-lifted">
                
  <input  id='read-tab' type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Wishlist Books" />
  <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Wishlist Books </div>

   <input  id='read-tab' type="radio"  name="my_tabs_2" role="tab" class="tab" aria-label="Read Books" checked /> 
  <div role="tabpanel" class="tab-content bg-base-100 border-base-700 rounded-box p-6">Read Books</div>


</div>

 


        </div>
    );
};

export default ListedBooks;