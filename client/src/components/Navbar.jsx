import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { DropdownProfile } from "./DropdownProfile";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [openProfile, setOpenProfile] = useState(false);
  const handleClick = () => {
    if (!user) {
      navigate("/login");
    }
    else {
      setOpenProfile((prev)=> !prev);
    }
  }
  return (
    <nav className="mx-20 my-1 flex justify-between items-center">
      <NavLink to="/">
        <img src={logo} alt="" width={65} />
      </NavLink>
      <i className='bx bx-menu'></i>
      <ul className="flex gap-5">
        <li>Categories</li>
        <li>Brands</li>
        <li>Trending</li>
        <li>Product</li>
      </ul>
      <form action="">
        <div className="flex items-center relative text-orange-500/50 focus-within:text-orange-500">
          <i className="bx bx-search absolute ml-2 pointer-events-none"></i>
          <input
            type="text"
            name="search"
            placeholder="Search"
            aria-label="search"
            // className="px-4  border-solid border-2 rounded-full border-orange-500/50 focus:border-orange-500"
            className="pr-3 pl-8 ring-2 rounded-full ring-orange-500/50 focus:ring-orange-500 focus:outline-none"
          />
        </div>
      </form>
      <i className="bx bx-heart"></i>
      <i className="bx bx-cart"></i>
      <i className="bx bx-user" onClick={handleClick}></i>
      { openProfile && <DropdownProfile />}
    </nav>
  );
};
