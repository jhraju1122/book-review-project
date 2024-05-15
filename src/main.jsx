import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagestoRead from './components/PagestoRead/PagestoRead.jsx';
import Book from './components/book/Book.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import Books from './components/Books/Books.jsx';
import Wishlist from './components/Wishlist/Wishlist.jsx';
 
 
 
 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element:  <Books></Books>
      },
      {
        path: '/ListedBooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/PagestoRead',
        element: <PagestoRead></PagestoRead>
      },
      //  {
      //    path:'/Wishlist',
      //   element:<Wishlist></Wishlist>,
      //  },



       {
path:'/Book/:id',
element: <BookDetails></BookDetails>,
loader: ({params}) => fetch('/bookblog.json'),
       },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

 