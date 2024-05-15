import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

 


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
      <div className="flex ml-[543px] mt-20">
         
      <div className="bg-white opacity-80 w-[50%] h-[711px] w-[573px] mr-10">
       <img id="single-image" src={singleBook?.image} alt="" />
      </div>

    <div>
    <div className="w-[50%] h-[711px] w-[573px]">
      <h1 className="text-[40px] font-bold mb-10">single book details{singleBook?.bookName}</h1>
      <p className="font-bold text-2xl mb-10">By:{singleBook?.author}</p>
      <hr />
      <p className="font-semibold text-2xl mb-5 mt-5">{singleBook?.category}</p>
      <hr />
      <p className="text-2xl">Review:{singleBook?.review} </p>
      <p className="font-bold text-2xl">Tag: {singleBook?.tags}</p>
      <hr />
      <p className="text-2xl">Number of pages: {singleBook?.totalPages}</p>
      <p className="text-2xl">Publisher: {singleBook?.publisher}</p>
      <p className="text-2xl">Year of Publishing: {singleBook?.yearOfPublishing}</p>
      <p className="text-2xl mb-10">Rating: {singleBook?.rating}</p>
      
    <Link id="button" className="btn " to="/PagestoRead" >Read</Link>
    <Link id="button-2" className="btn " to="/ListedBooks">Wishlist</Link>
       

      </div>
    </div>
    </div>
    );
};

export default BookDetails;