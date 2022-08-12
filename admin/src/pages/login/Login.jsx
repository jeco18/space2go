import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

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
      if(res.data.isAdmin){
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details});
        navigate("/")
      }else{
        dispatch({ type: "LOGIN_FAILURE", payload: {message: "You are not allowed"} });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="login flex flex-col justify-center items-center gap-2 bg-gradient-to-t from-violet-300 to-blue-500">
      <div className="lContainer flex flex-row justify-center items-center gap-2 p-3 bg-white rounded-md shadow-2xl ">
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" 
          className="md:h-[300px] md:w-[300px] w-[150px] h-[150px]"/>
        </div>
        <div className="flex flex-col gap-5 p-3">
            <p className="font-bold">Login as Admin User</p>
            <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
            className="lInput border border-black p-4 rounded-md "
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              className="lInput border border-black p-4 rounded-md"
            />
            <button disabled={loading} onClick={handleClick} className="lButton p-2 rounded-md border border-black hover:bg-violet-500">
              Login
            </button>
            {error && <span>{error.message}</span>}
        </div>
        
      </div>
    </div>
  );
};

export default Login;
