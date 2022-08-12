import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  // const handleFocus = (e) => {
  //   setFocused(true);
  // };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        // onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        className=" peer"
        // focused={focused.toString()}
        
      />
      <span className=" peer-invalid:peer-focus-visible:block hidden text-red-600">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
