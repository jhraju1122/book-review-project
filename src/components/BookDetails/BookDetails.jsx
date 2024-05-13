import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

 


const BookDetails = () => {
const books = useLoaderData()
const [singleBook, setSingleBook] = useState(null)
	const { id } = useParams()
	useEffect(() => {

		const single = books.find((b) => b.id === id)
		setSingleBook(single)
	}, [id])
    console.log(singleBook);
 const{ bookId, bookName, author, image , review, totalPages, rating, category, tags, publisher, yearOfPublishing} = singleBook || {};
    return (
       
        <div className="flex">
         
          <div className="bg-white opacity-80 w-[50%] ">
           <img id="single-image" src={singleBook?.image} alt="" />
          </div>

        <div>
        <div className="w-[50%]">
          <h1 className="text-[30px] font-bold">single book details{singleBook?.bookName}</h1>
          <p className="font-bold text-xl">By:{singleBook?.author}</p>
          <hr />
          <p className="font-semibold text-xl">{singleBook?.category}</p>
          <hr />
          <p>Review:{singleBook?.review} </p>
          <p className="font-bold">Tag: {singleBook?.tags}</p>
          <hr />
          <p>Number of pages: {singleBook?.totalPages}</p>
          <p>Publisher: {singleBook?.publisher}</p>
          <p>Year of Publishing: {singleBook?.yearOfPublishing}</p>
          <p>Rating: {singleBook?.rating}</p>
          
        <button id="button" className="btn">Read</button>
          <button id="button-2" className="btn ">Wishlist</button>
    
          </div>
        </div>
          
        
         
         
        </div>
    );
};

export default BookDetails;