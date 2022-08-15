import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'

const Navbar = () => {
  const { user ,dispatch} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" })
    swal({
      title: "You have been logged out!",
      text: "You have to login to access your account again!",
      icon: "success",
      button: "Close",
    });
    navigate('/')
  };

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <h1 className="logo text-xl"> 🔮Space<span>2G♾</span></h1>
        </Link>
        {user ? <div className="navItems flex flex-row gap-5">
        
              <div className="flex flex-col items-center justify-center">
                <img
                src="data:image/jpeg;base64,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"
                alt="user"
                className="avatar"
                />
                <p className="text-center justify-content-center text-red-500 h-[8px]"> <span>{user.username}</span>  </p>
              </div>
        <button className="navButton text-white bg-violet-500 hover:bg-violet-400 hover:text-amber-50 rounded-lg  " onClick={handleLogout}>Logout</button>
        </div> : (
          <div className="navItems">
            <Link to={"/signup"} ><button className="navButton text-white px-5 rounded-md hover:-translate-y-0.5 transform transition bg-blue-500 hover:bg-blue-400 mr-2">Register</button></Link> 
            <Link to={`/login`}><button className="navButton text-white px-5 rounded-md hover:-translate-y-0.5 transform transition bg-violet-500 hover:bg-violet-400 mr-2">Login</button></Link>
          
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
