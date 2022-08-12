// import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer"
import jwt_decode from "jwt-decode";
import axios from 'axios'
import './register.css'


const Register = () => {


    const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword:"",
		phone: "",
		city: "",
		country: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8800/api/auth/register";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
            setIsLoading(false)
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

    
  //google identity services
    // const [ user, setUser ] = useState({});


    // function handleCallbackResponse(response) {
    // console.log( "Encoded JWT ID token:" + response.credential );
    // var userObject = jwt_decode(response.credential);
    // var userEmail = jwt_decode(response.credential.email);
    // console.log(userEmail);
    // console.log(userObject);
    // setUser(userObject);
    // document.getElementById("signInDiv").hidden = true;
    // }

    // function handleSignOut(event){
    // setUser({}); 
    // document.getElementById("signInDiv").hidden = false;
    // }

    // useEffect(() => {
    //     /*global google */
    //     google.accounts.id.initialize({
    //     client_id: "510129614276-k8shadvejb6evi0b0o8nqi0t9t286i37.apps.googleusercontent.com",
    //     callback: handleCallbackResponse
    //     });

    //     google.accounts.id.renderButton(
    //     document.getElementById("signInDiv"),
    //     { theme: "outline", size:"large"}
    //     );

        
        

    //     google.accounts.id.prompt();
    // }, []);


    return (	
    
		<div className="flex items-center justify-center w-full h-screen register" >
			<Navbar/>
			<div className="w-[340px] mt-[80px] gap-3 flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-xl">

				<div >
					<h1 className="font-bold text-3xl text-[#6439FF]">REGISTER</h1>
				</div>
				<div >
					<form  onSubmit={handleSubmit} className="flex flex-col items-center justify-center" >
						<div className="w-[235px] mb-2">
							<span className="text-[15px] text-gray-600">Username</span>
							<input
								type="text"
								placeholder="Username"
								name="username"
								onChange={handleChange}
								value={data.username}
								pattern="^[A-Za-z0-9]{3,16}$"
								className="peer border border-black p-2 rounded-md"
								required 
							/>
							<span className=" peer-invalid:peer-focus:block hidden text-red-600 text-[10px]">Username should be 3-16 characters and shouldn't include any special character!</span>
						</div>
						<div className="w-[235px] mb-2">
							<span className="text-[15px] text-gray-600">Email</span>
							<input
								type="email"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={data.email}
								
								className="peer border border-black p-2 rounded-md"
								required							
							/>
							<span className=" peer-invalid:peer-focus:block hidden text-red-600 text-[10px]">It should be a valid email address!</span>
						</div>
						<div className="w-[235px] mb-2">
							<span className="text-[15px] text-gray-600">Password</span>
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
								value={data.password}
								pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,20}$"
								className="peer border border-black p-2 rounded-md"
								required						
							/>
							<span className=" peer-invalid:peer-focus:block hidden text-red-600 text-[9px]">Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!</span>
						</div>
						<div className="w-[235px] mb-2">
							<span className="text-[15px] text-gray-600">Confirm Password</span>
							<input
								type="password"
								placeholder="Confirm Password"
								name="confirmPassword"
								onChange={handleChange}
								value={data.confirmPassword}
								pattern={data.password}
								className="peer border border-black p-2 rounded-md"
								required						
							/>
							<span className=" peer-invalid:peer-focus:block hidden text-red-600 text-[10px]">Passwords don't match!</span>
						</div>
						<div className="w-[235px] mb-2">
							<span className="text-[15px] text-gray-600">Phone</span>
							<input
								type="text"
								placeholder="Phone"
								name="phone"
								onChange={handleChange}
								value={data.phone}
								pattern="^[0-9]{11}$"
								className="peer border border-black p-2 rounded-md"
								required                           
							/>
							<span className=" peer-invalid:peer-focus:block hidden text-red-600 text-[10px]">It should be 11 digit number!</span>
						</div>
						<div className="w-[235px] mb-2">
							<span className="text-[15px] text-gray-600">Country</span>
							<input
								type="text"
								placeholder="Country"
								name="country"
								onChange={handleChange}
								value={data.country}
								className=" border border-black p-2 rounded-md"
								required	
							/>
						</div>
						<div className="w-[235px] mb-2">
							<span className="text-[15px] text-gray-600">City</span>
							<input
								type="text"
								placeholder="City"
								name="city"
								onChange={handleChange}
								value={data.city}
								className=" border border-black p-2 rounded-md"
								required	
							/>
						</div>
						{error && <div >{error}</div>}
						<button type="submit" className="bg-violet-500 text-white p-2 rounded-md">
							Sign Up
						</button>
					</form>
					<Link to="/login" className="">
						<button type="button " className="text-[12px] ml-[35px]">
							Already have an account? 
						</button>
					</Link>
				</div>
			</div>
		</div>

	
	);

};


export default Register;
