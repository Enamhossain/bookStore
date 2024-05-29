// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsCard = () => {
  const book = useLoaderData();
  console.log(book);

  return (
    <div className="mt-5   mx-auto  shadow-md rounded-md  md:max-w-4xl mb-64">
    <div className="bg-indigo-500 px-4 py-2 text-white text-center">
      <h3 className="text-lg font-semibold">Book Details</h3>
    </div>
    <div className="md:flex">
      <div className="md:flex-shrink-0 mt-5 border border-gray-800">
        <img className="h-96 w-full object-cover  " src={book.image_url}  />
      </div>
      <div className="p-8">
        <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{book.genre}</h2>
        <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{book.title}</h1>
        <p className="mt-2 text-gray-500">{book.subtitle}</p>
        <p className="mt-2 text-gray-500">Author: {book.author}</p>
        <p className="mt-2 text-gray-500">Price: ${book.price}</p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-indigo-500">Description</h3>
          <p className="mt-2 text-gray-500">{book.description}</p>
        </div>
     <div className='mt-5'>
     <buttom className="text-white p-2 bg-indigo-600 mt-6">PDF Read</buttom>
     </div>
      </div>
    </div>

  </div>
  
  );
};

export default DetailsCard;
