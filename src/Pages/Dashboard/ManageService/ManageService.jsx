// import React from 'react'

import axios from "axios"
import { useEffect } from "react"

const ManageService = () => {

  useEffect(() => {
     async function load(){
        const book = await axios.get('http://localhost:3000/books')
           console.log(book)
      }
     load()
  },[])
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
    <section className="container px-4 mx-auto mt-10">
      <div className="flex items-center gap-x-3 mb-6">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">Manage Items</h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          100 users
        </span>
      </div>

      <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-left dark:text-gray-400">
                <div className="flex items-center gap-x-3">
                  <input type="checkbox" className="text-blue-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-900 dark:border-gray-700" />
                  <span>Name</span>
                </div>
              </th>
              <th scope="col" className="px-12 py-3 text-xs font-medium text-gray-500 uppercase text-left dark:text-gray-400">Email</th>
              <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-left dark:text-gray-400">Role</th>
              <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-right dark:text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            {[
              { name: 'Albert Flores', email: 'albert@example.com', role: 'CEO', avatar: 'https://via.placeholder.com/150' },
              { name: 'Jenny Wilson', email: 'jenny@example.com', role: 'CTO', avatar: 'https://via.placeholder.com/150' },
              { name: 'Kristin Watson', email: 'kristin@example.com', role: 'CFO', avatar: 'https://via.placeholder.com/150' },
            ].map((member, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">
                  <div className="flex items-center gap-x-3">
                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-900 dark:border-gray-700" />
                    <div className="flex items-center gap-x-2">
                      <img className="object-cover w-10 h-10 rounded-full" src={member.avatar} alt={`${member.name} avatar`} />
                      <div>
                        <h2 className="text-sm font-medium text-gray-800 dark:text-white">{member.name}</h2>
                        <p className="text-xs font-normal text-gray-600 dark:text-gray-400">@{member.name.split(' ')[0].toLowerCase()}</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-12 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">{member.email}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">{member.role}</td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <button className="px-2 py-1 text-xs text-gray-500 border rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300">
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <button className="px-2 py-1 text-xs text-gray-500 border rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300">
                    Deleted
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </div>
  )
}

export default ManageService