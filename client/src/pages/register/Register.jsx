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
        <div>
            <Navbar />
            <div className="registerPage grid grid-cols-2 justify-center items-center h-screen bg-[url('https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')] h-screen bg-cover bg-center">
                <h2 className="self-start -mt-12 text-white text-9xl font-bold self-center ml-12">Register</h2>
                <div class="flex flex-col -mt-32 ml-20 w-full max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
                    <div class="self-center font-bold mb-6 text-xl text-gray-700 sm:text-2xl">
                        Register an Account
                    </div>
                    <div class="mt-4">
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="flex flex-col mb-2">
                                <div className="flex relative ">
                                    <span className="rounded-l-lg inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <input type="text" className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-lg py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[rgb(100,57,255)] focus:border-transparent" placeholder="Username" required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className="flex relative ">
                                    <span className="rounded-l-lg inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input type="email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-lg py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[rgb(100,57,255)] focus:border-transparent" placeholder="Email" required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <div className="flex relative ">
                                    <span className="self-center rounded-l-lg inline-flex  items-center p-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input type="password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[rgb(100,57,255)] focus:border-transparent" placeholder="Password" required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            
                            <div className="flex w-full">
                                {!isLoading && <button type="submit" className="py-2 px-4  bg-[rgb(100,57,255)] hover:bg-[rgb(85, 38, 255)] text-white w-full text-center text-base font-semibold shadow-md  rounded-lg ">
                                    Register
                                </button>}
                                {isLoading && <button disabled>Registering User...</button>}
                            </div>
                            
                        </form>
                        <div class="flex items-center justify-center mt-6">
                            <a href="./login" class="inline-flex items-center text-xs text-center text-black hover:text-gray-700">
                            <span className="ml-2">
                            Already have an account?<p className="text-sky-800">Sign in</p>
                            </span>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
		<div className="flex items-center justify-center w-full h-screen register" >
			<div className="w-[340px]  gap-3 flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-xl">
				<div >
					<h1 className="font-bold text-3xl">REGISTER</h1>
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
};


export default Register;
