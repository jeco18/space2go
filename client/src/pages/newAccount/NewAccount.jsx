// import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import "./newaccount.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer"
import jwt_decode from "jwt-decode";
import axios from 'axios'
import FormInput from '../../components/formInput/FormInput'



const NewAccount = () => {


    const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
    confirmPassword: "",
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
            setIsLoading(true)
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

    const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: data.password,
      required: true,
    },
    {
      id: 5,
      name: "phone",
      type: "text",
      placeholder: "Phone",
      errorMessage: "It should be a 11 digits only!",
      pattern: "^[0-9]{11}$",
      label: "Phone",
      required: true,
    },
    {
      id: 6,
      name: "country",
      type: "text",
      placeholder: "Country",
      label: "Country",
      required: true,
    },
    {
      id: 7,
      name: "city",
      type: "text",
      placeholder: "City",
      label: "City",
      required: true,
    },
  ];


    return (
        <div className="newaccount">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputs.map((input) => (
                <FormInput
                    key={input.id}
                    {...input}
                    value={data[input.name]}
                    onChange={handleChange}
                />
                ))}
                <button>Submit</button>
            </form>
        </div>
	);
};


export default NewAccount;
