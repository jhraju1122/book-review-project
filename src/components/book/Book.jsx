 

const Book = ({book}) => {
    const {image, bookName, author, rating, category} = book;
    return (
        <div>
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
    );
};

export default Book;