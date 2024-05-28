// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import BookStoreCard from "./BookStoreCard";

const BookStore = () => {
  const [books, setBooks] = useState();
  const [categories, setCategory] = useState();
 

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));

    
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
    .then((res) => res.json())
    .then((data) => setCategory(data));

    
  }, []);

  return (
    <section className="text-white bg-black body-font">
      <div className="container px-5 py-24 mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4  ">Our Book Category</h1>
             <div className="mx-auto text-center items-center ml-80">
                 
        <div className="flex flex-wrap mb-8">
        {categories?.map((category) => (
           <div key={category.id} className="p-4 text-white border rounded-lg m-2">
           <h2 className="text-lg font-medium">{category.name}</h2>
         </div>
          ))} 
     </div>
             </div>

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
        <button className="btn bg-indigo-500 p-3 mt-5">More Books</button>
      </div>
    </section>
  );
};

export default BookStore;
