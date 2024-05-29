// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddService = () => {


  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/categories");
      if (data?.status === 200) {
        console.log(data?.data);
        setCategories(data?.data);
      }
    }

    load();
  }, []);




  const handleCreateBook = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value; 
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
  

    const bookData = {
      id,
      title,
      price,
      category,
      description,
    };
  console.log(bookData)
    try {
      await axios.post("http://localhost:3000/books", bookData);
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  const notify = () => toast("Book Successfuly Add!");
  
  return (
    <div className=" px-4 py-8">
      <ToastContainer className="text-green-500 text-2xl" />
      <h1 className="text-2xl font-bold mb-4 text-black text-center ">Add Book</h1>
      <form onSubmit={handleCreateBook} className="bg-gray-900 p-8 rounded-lg">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className="w-full py-3 px-5 text-gray-700 bg-gray-200 rounded-lg focus:outline-none"
            required
          >
            {categories?.map((category) => (
              <option key={category?.id} value={category?.name}>
                {category?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full text-gray-700 bg-gray-200 rounded-lg focus:outline-none py-2 px-3"
            required
          />
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Add Book"
            onClick={notify}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 cursor-pointer"
          />
        </div>
      </form>
    </div>
  )
}

export default AddService

