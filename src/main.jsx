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
import ErrorPage from './components/Errorpage/ErrorPage.jsx';
 import PopularLiterature from './components/Navbar/PopularLiterature.jsx';
import Webinar from './components/Navbar/Webinar.jsx';
 
 
 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: '/PopularLiterature',
        element: <PopularLiterature></PopularLiterature>
      },
      {
        path: '/Webinar',
        element: <Webinar></Webinar>
      },
      


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

 