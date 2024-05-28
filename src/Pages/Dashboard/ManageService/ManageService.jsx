// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";

const ManageService = () => {
  const [books, setBooks] = useState();
  console.log(books);
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
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
      <section className="container px-4 mx-auto mt-10">
        <div className="flex items-center gap-x-3 mb-6">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Manage Items
          </h2>
          <span className="px-3 py-1 text-md  text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {
              books?.length
            }  Items
          </span>
        </div>

        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-left dark:text-gray-400"
                >
                  <div className="flex items-center gap-x-3">
                    <input
                      type="checkbox"
                      className="text-blue-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-900 dark:border-gray-700"
                    />
                    <span>Name</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-12 py-3 text-xs font-medium text-gray-500 uppercase text-left dark:text-gray-400"
                >
                 description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-left dark:text-gray-400"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-right dark:text-gray-400"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
              {books?.map((book, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">
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
                  <td className="w-1/2 md:w-2/3 px-12 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">
                    {book.description.split(" ").slice(0, 5).join(" ")}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white ">
                    {book.rating}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <button className="px-2 py-1 text-md font-bold bg-green-600 text-gray-100 border rounded-lg transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-300">
                      Edit
                    </button>
                    <button className="px-2 py-1 mt-5 text-md font-bold bg-red-500 text-gray-100 border rounded-lg transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-300">
                      Delete
                    </button>
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ManageService;
