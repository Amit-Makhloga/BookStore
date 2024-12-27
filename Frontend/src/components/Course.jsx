import React, { useEffect, useState } from 'react'
import axios from "axios";
import Cards from './Cards'
import {Link} from "react-router-dom"

function Course() {
  const [book, setBook] = useState([])
  useEffect(()=> {
    const getBook = async() => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, [])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
          <p className='mt-12'>
          We’re thrilled to have you here. Explore a world of endless possibilities, where every moment brings a new adventure. Dive into stories, experiences, and opportunities crafted just for you. Let’s make this journey unforgettable together!
          Embrace the excitement as you embark on a journey filled with incredible discoveries and growth. Each step offers something new, and we’re here to guide you every step of the way. Join us and let’s create amazing memories together!
          </p>
          <Link to='/BookStore'> 
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>    
    </>
  )
}

export default Course