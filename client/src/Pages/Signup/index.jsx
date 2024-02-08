import React, { useState } from "react";
import { Button, InputField } from "../../Components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../State/Actions/AuthActions";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [signupForm, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;

    setSignupForm({
      ...signupForm,
      [name]: value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(signupForm);
    dispatch(signup(signupForm)).then((res) => {
      if (res?.type === "USER_SIGNUP_SUCCESS") {
        toast.success("Signup Successful!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        });
        navigate("/login");
      } else {
        toast.error("Please fill the all required details", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        });
      }
    });
  };

  return (
    <div className="w-1/4 h-auto m-auto">
      <div className="w-full text-xl font-bold mb-6 mt-5">Signup</div>
      <form className="w-full p-4">
        <div className="w-full mb-5">
          <InputField
            label="Firstname"
            value={signupForm.firstname}
            onChange={handleChange}
            name="firstname"
            type="text"
          />
        </div>
        <div className="w-full mb-5">
          <InputField
            label="Lastname"
            value={signupForm.lastname}
            onChange={handleChange}
            name="lastname"
            type="text"
          />
        </div>
        <div className="w-full mb-5">
          <InputField
            label="Email"
            value={signupForm.email}
            onChange={handleChange}
            name="email"
            type="email"
          />
        </div>
        <div className="w-full mb-5">
          <InputField
            label="Password"
            value={signupForm.password}
            onChange={handleChange}
            name="password"
            type="password"
          />
        </div>
        <div className="w-full mb-5">
          <Button title="Signup" onClick={handleSignup} type="submit" />
        </div>
      </form>
      <div className="w-full m-auto text-base font-semibold">
        <div>Already a member?</div>
        <div
          className="font-semibold text-[#4f46e5] cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Signup;
