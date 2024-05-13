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
        <div>
         <h1>single book details{singleBook?.bookName}</h1>
          <div>
           
          </div>
          <div></div>
        </div>
    );
};

export default BookDetails;