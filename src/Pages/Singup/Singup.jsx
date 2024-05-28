import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Signup = () => {
  const [passMatch, setPassMatch] = useState(true);
  const [error, setError] = useState('');
  const { createUser } = useAuth(); // Ensure correct import and function name

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
  console.log(firstName,lastName)
    if (password !== confirmPassword) {
      setPassMatch(false);
      return;
    }

    setPassMatch(true);
    setError('');

    try {
      await createUser(email, password);
      console.log('User created successfully');
      // Handle additional steps like redirecting or updating the UI
    } catch (error) {
      console.error('Error creating user:', error);
      setError(error.message);
    }
  };

  return (
    <section className="bg-white dark:bg-[#d1d5db]">
      <div className="flex justify-center">
        <div
          className="hidden bg-cover lg:block lg:w-full"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/FqwpSVq/Adobe-Stock-628551919.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh",
          }}
        ></div>
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-400 capitalize dark:text-gray-800">
              Get your <span className="text-[#8ee448]">free account</span> now.
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <div className="mt-6"></div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm text-black dark:text-black">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    name="firstName"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#3A9101] focus:ring-[#3A9101] focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-black dark:text-black">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Snow"
                    name="lastName"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#3A9101] focus:ring-[#3A9101] focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm text-black dark:text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="johnsnow@example.com"
                  name="email"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#3A9101] focus:ring-[#3A9101] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 mt-5 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm text-black dark:text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#3A9101] focus:ring-[#3A9101] focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-black dark:text-black">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#3A9101] focus:ring-[#3A9101] focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              {!passMatch && (
                <p className="text-red-600 text-xl">Passwords do not match</p>
              )}
              {error && <p className="text-red-600 text-xl">{error}</p>}
              <div className="mt-5">
                <button className="flex items-center justify-between w-full px-4 py-2 text-sm tracking-wide capitalize transition-colors duration-300 transform text-black  bg-[#87A922] rounded-lg hover:bg-[#FCDC2A] focus:outline-none focus:ring focus:ring-[#D1D5DB] focus:ring-opacity-50">
                  <span>Sign Up</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                  or sign in with
                </p>

                <a
                  href="#"
                  className="flex items-center justify-center px-6 py-3 mt-4  text-gray-700 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 hover:text-white hover:bg-blue-400 dark:hover:bg-[#161605]"
                >
                  <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>

                  <span className="mx-2 font-semibold">
                    Sign up with Google
                  </span>
                </a>
              </div>
              <div className="mt-6 text-center">
                <Link
                  to="/Login"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Already have an account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
