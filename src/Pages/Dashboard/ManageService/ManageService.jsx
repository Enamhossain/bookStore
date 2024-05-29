// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";


const ManageService = () => {
  const [books, setBooks] = useState();
 

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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



  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get("http://localhost:3000/books");
        if (response.status === 200) {
          setBooks(response?.data);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      console.log("Book deleted successfully");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
      <section className="container px-4 mx-auto mt-10">
        <div className="flex items-center gap-x-3 mb-6">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Manage Items
          </h2>
          <span className="px-3 py-1 text-md  text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {books?.length} Items
          </span>
        </div>

        <div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead className="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-left dark:text-gray-400">
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              className="text-blue-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-900 dark:border-gray-700"
            />
            <span>Name</span>
          </div>
        </th>
        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-left dark:text-gray-400">
          Description
        </th>
        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-left dark:text-gray-400">
          Rating
        </th>
        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-right dark:text-gray-400">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
      {books?.map((book, index) => (
        <tr key={index}>
          <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-white whitespace-nowrap">
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                className="text-blue-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-900 dark:border-gray-700"
              />
              <div className="flex items-center gap-x-2">
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src={book.image_url}
                />
                <div>
                  <h2 className="text-sm font-medium text-gray-800 dark:text-white">
                    {book.title}
                  </h2>
                  <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                    ${book.price}
                  </p>
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-white">
            {book.subtitle.split(" ").slice(0, 5).join(" ")}
          </td>
          <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-white">
            {book.rating}
          </td>
          <td className="px-6 py-4 text-sm font-medium text-right">
            <div className="flex justify-end">
              <button
                onClick={openModal}
                className="px-2 py-1 mr-2 text-md font-bold bg-green-600 text-gray-100 border rounded-lg transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(book.id)}
                className="px-2 py-1 text-md font-bold bg-red-500 text-gray-100 border rounded-lg transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-300"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </section>
       {/* Model Edit */}
      <div
        className={`fixed inset-0 z-10 overflow-y-auto bg-gray-900 bg-opacity-50 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
            <h3
              className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
              id="modal-title"
            >
              Edit Book
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Update the details of the book.
            </p>

            <form className="mt-4" action="#">
              <label
                htmlFor="title"
                className="text-sm text-gray-700 dark:text-gray-200"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                className="block w-full px-4 py-3 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />

              <label
                htmlFor="description"
                className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="4"
                className="block w-full px-4 py-3 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              ></textarea>

              <label
                htmlFor="price"
                className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                className="block w-full px-4 py-3 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
              <div className="mb-4">
                <label htmlFor="">Cateogry </label>
                <select
                  name="category"
                  id=""
                  className="w-full py-3 px-5 border text-gray-900"
                >
                  {categories?.map((category) => (
                    <option key={category?.id} value={category?.name}>
                      {category?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
