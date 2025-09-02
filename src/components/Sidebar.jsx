import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Upload, BarChart2, Settings } from "lucide-react"; 

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/" },
    { name: "Upload Resume", icon: <Upload size={20} />, path: "/upload" },
    { name: "Reports", icon: <BarChart2 size={20} />, path: "/reports" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    <div className="flex">
  {/* Sidebar */}
  <div
    className={`${
      open ? "w-60" : "w-16"
    } fixed left-0 top-0 h-screen bg-gray-900 text-gray-200 duration-300`}
  >
    {/* Toggle Button */}
    <button
      onClick={() => setOpen(!open)}
      className="absolute -right-3 top-4 bg-gray-700 rounded-full p-1"
    >
      {open ? <X size={18} /> : <Menu size={18} />}
    </button>

    {/* Logo */}
    <h1 className={`text-xl font-bold p-4 ${!open && "hidden"}`}>
      Resume Analyzer
    </h1>

    {/* Menu Items */}
    <ul className="pt-6">
      {menus.map((menu, i) => (
        <Link to={menu.path} key={i}>
          <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-md cursor-pointer">
            {menu.icon}
            <span
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              {menu.name}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  </div>

  {/* Page Content */}
  <div
    className={`flex-1 p-6 duration-300 ${
      open ? "ml-40" : "ml-16"
    }`}
  >
   
  </div>
</div>


  );
};

export default Sidebar;
