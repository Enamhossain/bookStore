import { Link } from "react-router-dom";
import AuthProvider from "../../AuthProvider/AuthProvider";
import useAuth from "../../Hook/useAuth";

const Login = () => {
  const { googleLogin, singIn } = useAuth(AuthProvider);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singIn(email, password);
  };

  const handleGoogleSignIn = () => {
    googleLogin();
  };

  return (
    <div className="relative">
      
      <div className="absolute -left-[100px] top-[130px] z-0 h-[400px] w-[400px] rounded-full bg-[hsla(272,97%,72%,0.5)] blur-[120px]">&nbsp;</div>
      <div className="absolute left-[50px] top-[110px] z-0 h-[200px] w-[200px] rounded-full bg-[hsla(32,100%,65%,0.5)] blur-[80px]">&nbsp;</div>
      <div className="absolute -left-[100px] top-[130px] z-0 h-[400px] w-[400px] rounded-full bg-[hsla(272,97%,72%,0.5)] blur-[120px]">&nbsp;</div>
      <div className="absolute left-[50px] top-[110px] z-0 h-[200px] w-[200px] rounded-full bg-[hsla(32,100%,65%,0.5)] blur-[80px]">&nbsp;</div>
      <div className="absolute -left-[100px] top-[130px] z-0 h-[400px] w-[400px] rounded-full bg-[hsla(272,97%,72%,0.5)] blur-[120px]">&nbsp;</div>
      <div className="absolute left-[50px] top-[110px] z-0 h-[200px] w-[200px] rounded-full bg-[hsla(32,100%,65%,0.5)] blur-[80px]">&nbsp;</div>
      <div className="absolute -left-[100px] top-[130px] z-0 h-[400px] w-[400px] rounded-full bg-[hsla(272,97%,72%,0.5)] blur-[120px]">&nbsp;</div>
      <div className="absolute left-[50px] top-[110px] z-0 h-[200px] w-[200px] rounded-full bg-[hsla(32,85%,68%,1)] blur-[80px]">&nbsp;</div>
    
      <div className="flex  py-10  mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-[#d1d5db] h-100">
        <div
          className="hidden bg-cover lg:block  lg:w-1/2 -z-0 "
          style={{
            backgroundImage:
              "url('https://i.ibb.co/FqwpSVq/Adobe-Stock-628551919.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh", // Adjust this as needed
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""> */}
          </div>

          <p className="mt-3 text-xl text-center text-[#4fa8d1] dark:text-[#3A9101] font-bold">
            Welcome back!
          </p>

          <a
            href="#"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center mt-4 text-gray-800 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-white hover:bg-blue-400 dark:hover:bg-[#161605]"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
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
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center mt-4 text-gray-800 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-white hover:bg-blue-400 dark:hover:bg-[#161605]"
          >
            <div className="px-4 py-2 rounded-lg">
              <svg
                fill="#0f2fd2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#0f2fd2"
                width={24}
                height={25}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path>
                </g>
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Facebook
            </span>
          </a>

          <form onSubmit={handleLogin}>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-[#87A922] uppercase hover:underline"
              >
                or login with email
              </a>
              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-[#87A922] dark:text-[#111]">
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-[#87A922] bg-[#F7F6BB] border rounded-lg dark:bg-[#f1f1f1f2] dark:text-[#87A922] dark:border-[#87A922] focus:border-[#FCDC2A] focus:ring-opacity-40 dark:focus:border-[#FCDC2A] focus:outline-none focus:ring focus:ring-[#FCDC2A]"
                type="email"
                name="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-[#87A922] dark:text-[#2b2a2a]">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-[#87A922] dark:text-[#111] hover:underline"
                >
                  Forget Password?
                </a>
              </div>
              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-[#87A922] bg-[#F7F6BB]  border rounded-lg dark:bg-[#f1f1f1] dark:text-[#87A922] dark:border-[#87A922] focus:border-[#FCDC2A] focus:ring-opacity-40 dark:focus:border-[#FCDC2A] focus:outline-none focus:ring focus:ring-[#FCDC2A]"
                type="password"
                name="password"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#87A922] rounded-lg hover:bg-[#FCDC2A] focus:outline-none focus:ring focus:ring-[#F7F6BB] focus:ring-opacity-50">
                Sign In
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <Link to="/registation"
              
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or sign up
              </Link>
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>


           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
