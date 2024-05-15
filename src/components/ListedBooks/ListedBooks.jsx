import React from 'react';
import { Link } from 'react-router-dom';

const ListedBooks = () => {
    return (
        <div>
            <h1 id='Bookslist'>Books</h1>
            <Link id='sortby' className='btn'>Sort By</Link>

            {/* tab  */}
            <div role="tablist" class="tabs tabs-lifted">
  <input  id='read-tab' type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Read Books" />
  <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Read Books</div>

  <input  id='read-tab' type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Wishlist Books" checked />
  <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>


</div>
        </div>
    );
};

export default ListedBooks;