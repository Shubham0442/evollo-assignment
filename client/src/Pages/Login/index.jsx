import React, { useState } from "react";
import { Button, InputField } from "../../Components";
import { useNavigate } from "react-router-dom";
import { login } from "../../State/Actions/AuthActions";
import { useDispatch } from "react-redux";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(loginForm);
    dispatch(login(loginForm)).then((res) => {
      if (res?.type === "USER_LOGIN_SUCCESS") {
        toast.success("Login Successful!", {
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
        navigate("/");
      } else {
        toast.error("Please fill correct your login Details", {
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
    <div className="login-container w-1/4 h-auto m-auto">
      <div className="w-full text-xl font-bold mb-6 mt-5">Login</div>
      <form className="w-full p-4">
        <div className="w-full mb-5">
          <InputField
            label="Email"
            value={loginForm.email}
            onChange={handleChange}
            name="email"
            type="email"
          />
        </div>
        <div className="w-full mb-5">
          <InputField
            label="Password"
            value={loginForm.password}
            onChange={handleChange}
            name="password"
            type="password"
          />
        </div>
        <div className="w-full mb-5">
          <Button title="Login" onClick={handleLogin} type="submit" />
        </div>
      </form>
      <div className="w-full m-auto text-base font-semibold">
        <div>Not a member?</div>
        <div
          className="font-semibold text-[#4f46e5] cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Signup
        </div>
      </div>
    </div>
  );
};

export default Login;
