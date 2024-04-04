import React from "react";
import { NavLink } from "react-router-dom";
import { MdDarkMode, MdOutlineShoppingCart } from "react-icons/md";

function Navbar() {
  return (
    <div
      className="navbarDesc"
      style={{ backgroundColor: "#F0F6FF", height: "80px" }}
    >
      <div style={{ paddingTop: "15px", paddingLeft: "400px" }}>
        <a
          aria-current="page"
          style={{
            color: "#DBE1FF",
            position: "absolute",
            backgroundColor: "#057AFF",
            padding: "5px",
            borderRadius: "5px",
            fontSize: "30px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          C
        </a>
        <div>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              listStyle: "none",
              gap: "50px",
              paddingLeft: "350px",
              paddingTop: "8px",
              cursor: "pointer",
            }}
          >
            <li>
              <NavLink to={"/"} style={{color: "#394E6A"}}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"} style={{color: "#394E6A"}}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/products"} style={{color: "#394E6A"}}>Products</NavLink>
            </li>
            <li>
              <NavLink to={"/cart"} style={{color: "#394E6A"}}>Cart</NavLink>
            </li>
           
        
            <li style={{ paddingLeft: "300px", fontSize: "25px" }}>
              {" "}
              <MdDarkMode />{" "}
            </li>
            <li style={{ fontSize: "25px" }}>
              {" "}
              <MdOutlineShoppingCart />{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
