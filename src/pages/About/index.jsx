import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../assets/carousel.webp";
import apiImage from "../../assets/apiImage.webp";
import Navbar from '../Navbar'

function Home() {
  const [card, setCard] = useState([])
  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products?featured", {
      method: "GET",
    })
   .then(res => res.json())
   .then(data => {
    setCard(data)
   })
   .catch(err => {
    console.log(err);
   })
  }, [])
  return (

    
    <div className="container">
      <div
        className="navbar_"
        style={{ backgroundColor: "#021431", padding: "8px" }}
      >
        <a href="#" style={{ marginLeft: "1300px" }}>
          Sign in / Guest
        </a>
        <a href="#" style={{ marginLeft: "20px" }}>
          Create Account
        </a>
      </div>  
        <Navbar></Navbar>
         <div style={{display: "flex", paddingLeft: "400px"}}>
          <h1 style={{color: "#394E6A", fontSize: "60px", marginLeft: "300px", marginTop: "100px" }}>We Love</h1>
      <div>
      <button style={{marginLeft: "30px", marginTop: "100px", padding: "20px", width: "200px", border: "none", borderRadius: "20px", fontSize: "35px", color: "#DBE1FF", backgroundColor: "#057AFF", fontWeight: "700", letterSpacing: "3px"}}>comfy</button>
      </div>
     
         </div>
         <div>
         <p style={{marginLeft: "180px", letterSpacing: "0.1px", lineHeight: "1.8", marginTop: "20px", fontSize: "18px", color: "#394E7D",  paddingLeft: "400px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam <br /> blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis <br /> ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique <br /> eos minima sit porro, ratione aspernatur!</p>
         </div>
        </div>
     
  );
}

export default Home;