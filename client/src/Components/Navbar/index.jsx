import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../State/Actions/AuthActions";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully!", {
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
  };

  return (
    <div className="navbar w-[80%] h-10 flex items-center justify-between px-4 m-auto">
      <div className="font-bold text-[25px]">Your Content</div>
      <div className="w-36">
        <Button onClick={handleLogout} title="Logout" />
      </div>
    </div>
  );
};

export default Navbar;
