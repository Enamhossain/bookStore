// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import BookStoreCard from "../Service/BookStoreCard";

const BookstoreAll = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="bg-black">
      <div
        className="relative h-64 lg:h-96 bg-cover bg-center flex items-center justify-center  bg-black"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1481142889578-dda440dacfe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg3fHxib29rfGVufDB8MHwwfHx8MA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          className="text-3xl lg:text-5xl font-extrabold text-white"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Welcome to the Bookstore
        </h1>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">All Books</h2>
        {books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books?.map((book) => (
              <BookStoreCard
                key={book.id}
                title={book.title}
                subtitle={book.subtitle}
                image={book.image_url}
                price={book.price}
                rating={book.rating}
                id={book.id}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookstoreAll;
