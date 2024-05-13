// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";



const Book = ({ book }) => {
  const { image, bookName, author, rating, category,id } = book;
  return (

    <Link to={`/Book/${id}`} className="transition border-2 hover:scale-105 border-primary hover:border-secondary hover:no-underline focus:no-underline border-opacity-30">
      <div id="card">
        <figure> <img id="image" src={image} alt="" /></figure>

        <div className="card-body">
          <div className='flex'>
            <p className='text-green-400 font-semibold'>Young Adult</p>
            <p className='text-green-400 font-semibold'>Identity</p>
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className='font-bold'>By : {author}</p>
          <div class="card-actions gap-48">
            <div class="font-bold text-xl">{category}</div>
            <div class="font-bold text-xl">{rating}</div>
          </div>


        </div>


      </div>
    </Link>

  );
};

export default Book;