import { useEffect, useState } from "react";
import Book from "../book/Book";
 

const Books = () => {
const [books, setBooks] = useState([]);

    useEffect(() =>{
 fetch("bookblog.json")
 .then(res => res.json())
 .then(data =>{
    setBooks(data);
 })
    }, [])
    return (
        <div>
          <div id='Books'>
            <h1 className='font-bold text-[40px] text-center'>Books</h1>
          </div>
            

        

   {/* card  */}
        <div className="main-container">
     <div className="grid grid-cols-3 gap-6">
     {
          books.map((book =><Book key={book.id} book={book}></Book>))
     }
      <div className="card">
      
      </div>

     </div>
        </div>

        </div>
    );
};

export default Books;