// import React from 'react'

import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const BookStoreCard = ({id, title, description, image, price, rating }) => {
  return (
    <div className="p-4 text-white shadow-md border ">
    <div className="rounded-lg overflow-hidden">
      <img alt="content" className="object-cover object-center h-64 w-full " src={image} />
    </div>
    <div className="mt-4">
      <h2 className="text-2xl font-medium">{title}</h2>
      <p className="mt-2 text-base text-gray-100">{description}</p>
      <p className="mt-2 text-gray-100">Price: ${price}100</p>
      <p className="mt-2 text-gray-100">Rating: {rating}100</p>
      <button className="mt-4 py-2 px-4 bg-[#C3F502] text-black font-bold rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
        <Link to={`books/${id}`}>See Details</Link>
      </button>
    </div>
  </div>
  )
}

export default BookStoreCard