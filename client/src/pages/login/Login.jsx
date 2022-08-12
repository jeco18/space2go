import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
    const res = await axios.post("/auth/login", credentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


    
  return (
    <div>
      <Navbar />

      <div >
        <div className="grid grid-cols-2 justify-center items-center  login h-screen bg-cover bg-center">
          <h2 className=" start mt-12 text-[#6439FF] text-7xl font-bold self-center ml-12 ">Start planning your next vacation</h2>
         

      
        
          <div class="flex flex-col mt-44 ml-20 w-full max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">

            <div class="self-center font-bold mb-6 text-xl text-gray-700 sm:text-2xl">
              Login Your Account
            </div>

            <div className="mt-4">
              {error && <span className="text-xs text-red-500">{error.message}</span>}
              <form autoComplete="off">
                <div className="flex flex-col mb-2">
                  <div className="flex relative ">
                    <span className="rounded-l-lg inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                    <input type="text" className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-lg py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[rgb(100,57,255)] focus:border-transparent" placeholder="Username"
                      id="username"
                      onChange={handleChange} />
                  </div>
                </div>
                <div className="flex flex-col mb-6">
                  <div className="flex relative ">
                    <span className="rounded-l-lg inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                        </path>
                      </svg>
                    </span>
                    <input type="password" className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[rgb(100,57,255)] focus:border-transparent" placeholder="Password"
                      id="password"
                      onChange={handleChange} />
                  </div>
                </div>
                <div className="block w-full">
                  <button disabled={loading} onClick={handleClick} className="py-2 px-4  bg-[rgb(100,57,255)] hover:bg-[rgb(85, 38, 255)] text-white w-full text-center text-base font-semibold shadow-md  rounded-lg ">
                    Login
                  </button>
                </div>
              </form>
              <div class="flex items-center justify-center mt-6">
                <a href="./register" class="inline-flex items-center text-xs text-center text-black hover:text-gray-700">
                  <span className="ml-2">
                  Don't have an account yet?<p className="text-sky-800">Create One</p>
                  </span>
                </a>
              </div>
              
              <div className="mt-5" id="signInDiv"></div>
              
              

              

            </div>
          </div>
        


        {/* <div className="lContainer">
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="lInput h-10 w-96 rounded shadow-md"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="lInput h-10 w-96 rounded shadow-md my-2"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div> */}
      
      
    
    </div>
    </div>
    </div>
  );
};

export default Login;
