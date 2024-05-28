

function Section() {
  return (
    <section className="bg-black dark:bg-gray-800 text-white lg:py-12 lg:flex lg:justify-center">
    <div
        className="overflow-hidden  dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div className="lg:w-1/2">
        <div
      className="h-64 bg-cover lg:h-full"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
      }}
    ></div>
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
  <h2 className="text-2xl font-semibold text-white dark:text-white md:text-3xl">
    Discover Your Next <span className="text-green-500">Favorite Book</span>
  </h2>

  <p className="mt-4 text-white dark:text-gray-300">
    Explore a vast collection of books from various genres. Whether you're into classics, romance, fantasy, or dystopian novels, we have something for everyone. Dive into captivating stories, enrich your mind, and embark on unforgettable adventures through the pages of our books.
  </p>

  <div className="inline-flex w-full mt-6 sm:w-auto">
    <a href="#" className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-yellow-800 rounded-lg hover:bg-green-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
      Start Browsing
    </a>
  </div>
</div>
    </div>
</section>
  )
}

export default Section