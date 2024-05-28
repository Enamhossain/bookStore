// import React from 'react'

// eslint-disable-next-line react/prop-types
const BookStoreCard = ({ title, description, image, price, rating }) => {
  return (
    <div className="p-4 text-white shadow-md border ">
    <div className="rounded-lg overflow-hidden">
      <img alt="content" className="object-cover object-center h-64 w-full " src={image} />
    </div>
    <div className="mt-4">
      <h2 className="text-2xl font-medium">{title}</h2>
      <p className="mt-2 text-base text-gray-100">{description}</p>
      <p className="mt-2 text-gray-400">Price: ${price}</p>
      <p className="mt-2 text-gray-400">Rating: {rating}</p>
      <button className="mt-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
        Details
      </button>
    </div>
  </div>
  )
}

export default BookStoreCard