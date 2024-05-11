 

const Book = ({book}) => {
    const {image} = book;
    return (
        <div>
           <figure> <img src={image} alt="" /></figure>
           <div className="card-body">
           <div className='flex'>
    <p className='text-green-400 font-semibold'>Young Adult</p>
    <p className='text-green-400 font-semibold'>Identity</p>
   </div>
            <h2 className="card-title">Shoes</h2>
            <p className='font-bold'>By : Awlad Hossain</p>
    <div class="card-actions gap-48">
      <div class="font-bold text-xl">Fiction</div> 
      <div class="font-bold text-xl">5.00</div>
    </div>
            
           </div>
            
        </div>
    );
};

export default Book;