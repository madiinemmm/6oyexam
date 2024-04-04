import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Carousel from "../../assets/carousel.webp";
import apiImage from "../../assets/apiImage.webp";
import styles from "./index.module.css";
import Header from "../Home/Header";
import Navbar from "../Navbar";
function Home() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.data);
      })
      .catch((err) => console.log(err))
     
  }, []);
  return (
    <div className="container">
      <div className="navbar_" style={{ backgroundColor: "#021431", padding: "8px" }}>
        <a href="#" style={{ marginLeft: "1300px" }}>Sign in / Guest</a>
        <a href="#" style={{ marginLeft: "20px" }}>Create Account</a>
      </div>  
      <Navbar/>

          <div className="main" style={{ display: "flex", paddingLeft: "400px" }}>
            <div>
              <h1 style={{
                fontSize: "60px",
                color: "#394E6A",
                marginTop: "120px",
                lineHeight: "1",
              }}>
                We are changing <br /> the way people <br /> shop
              </h1>
              <p style={{
                lineHeight: "2",
                marginTop: "20px",
                color: "#394E95",
              }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
                Tempore repellat explicabo enim soluta temporibus asperiores{" "}
                <br /> aut obcaecati perferendis porro nobis.
              </p>
              <button >
                <NavLink to={"/products"} style={{
                  position: "absolute",
                padding: "15px",
                border: "none",
                backgroundColor: "#057AFF",
                width: "135px",
                borderRadius: "8px",
                color: "#C6DFFF",
                fontSize: "12px",
                cursor: "pointer",
                letterSpacing: "0.5px",
                fontWeight: "600",
                marginTop: "30px"
                 
              }}>OUR PRODUCTS</NavLink>
                
              </button>
            </div>
            <div>
              <div className="carousel">
                <img src={Carousel} style={{
                  width: "350px",
                  height: "450px",
                  borderRadius: "20px",
                  marginLeft: "310px",
                  marginTop: "90px",
                }} alt="" />
              </div>
            </div>
          </div>
          <div style={{paddingLeft: "400px"}}>
          <h1 style={{
                letterSpacing: "1px",
                fontSize: "30px",
                color: "#394E6A",
                fontWeight: "500",
                marginTop: "100px",
              }}>
                Featured Products
              </h1>
              <p style={{
                width: "1160px",
                borderBottom: "2px solid #E2E8F4",
                marginTop: "20px",
              }}></p>
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "50px",
            }}>
              
                <div  className="cards" style={{
                  
                  width: "380px",
                  height: "330px",
                  borderRadius: "15px",
                  marginTop: "20px",
                  display: "flex",
                  gap: "20px",
                  paddingLeft: "400px",
                  cursor: "pointer"
                
              
                }}>
                  <div>
                    
                  </div>
              {cards &&
          cards.map((el, index) => {
            return (
              <div>
                { <Header data={el.attributes} key={index}></Header>}
              </div>
            );
          })}
                </div>
            
            </div>
          </div>
      
  );
}

export default Home;
             