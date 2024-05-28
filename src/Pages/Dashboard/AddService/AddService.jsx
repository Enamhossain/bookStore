// import React from 'react'

const AddService = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-white">Add Service</h1>
      <form  className="bg-gray-800 p-8 rounded-lg">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="description">Description</label>
          <textarea
            id="description"
            className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none"
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none"
            // value={price}
            // onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none"
            // value={category}
            // onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700">
            Add Service
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddService