// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import BookStoreCard from '../Service/BookStoreCard';

const BookstoreAll = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
   
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className='bg-black'>
      <div
        className="relative h-64 lg:h-96 bg-cover bg-center flex items-center justify-center  bg-black"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/books-arrangement-with-dark-background_23-2148898298.jpg?t=st=1716906194~exp=1716909794~hmac=1ed584e661bfdb8a4fc1fd422184768a34d43e4aa5d87a7bd94f3305d60bf6a6&w=996')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
    <h1 className="text-3xl lg:text-5xl font-extrabold text-white" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Welcome to the Bookstore
        </h1>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">All Books</h2>
        {books.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {books?.slice(0,6).map((book) => (
        <BookStoreCard
          key={book.id}
          title={book.title}
          description={book.description}
          image={book.image_url}
          price={book.price}
          rating={book.rating}
        />
      ))}
    </div>    
        ) : (
          <p>Loading books...</p>
        )}
      </div>
    </div>
  );
};

export default BookstoreAll;
