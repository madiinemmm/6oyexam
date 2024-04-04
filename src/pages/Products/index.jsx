import { useState, useEffect,  } from "react";
import { useNavigate } from "react-router-dom";
 import React from "react";
import Navbar from "../Navbar";
import styles from "./index.module.css";
import Card from './Card'





function Products() {

  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        setCard(data.data);
      })
      .catch((err) => console.log(err))
     
  }, []);



  return (
    <div className="container">
      <div>
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
        <Navbar />
      </div>
      <div
        className="filter-card"
        style={{
          width: "1130px",
          height: "230px",
          backgroundColor: "#F0F6FF",
          marginTop: "50px",
          marginLeft: "400px",
          borderRadius: "8px", 
        }}
      >
        <div style={{ display: "flex", gap: "15px" }}>
          <div>
            <div style={{ paddingLeft: "60px", paddingTop: "20px" }}>
              <label htmlFor="search">Search product</label>
            </div>
            <div>
              <input
                type="text"
                placeholder=""
                style={{ marginTop: "10px", marginLeft: "50px" }}
              />
            </div>
          </div>
          <div>
            <div style={{ paddingTop: "20px" }}>
              <label htmlFor="search">Search category</label>
            </div>
            <div>
              <select style={{ marginTop: "10px" }}>
                <option value="1" selected>
                  all
                </option>
                <option value="2">Tables</option>
                <option value="3">Chairs</option>
                <option value="4">Kids</option>
                <option value="5">Sofas</option>
                <option value="6">Beds</option>
              </select>
            </div>
          </div>
          <div>
            <div style={{ paddingTop: "20px" }}>
              <label htmlFor="search">Search company</label>
            </div>
            <div>
              <select style={{ marginTop: "10px" }}>
                <option value="1" selected>
                  all
                </option>
                <option value="2">Modenza</option>
                <option value="3">Luxora</option>
                <option value="4">Artifex</option>
                <option value="5">Comfora</option>
                <option value="6">Homestead</option>
              </select>
            </div>
          </div>
          <div>
            <div style={{ paddingTop: "20px" }}>
              <label htmlFor="search">Sort By</label>
            </div>
            <div>
              <select style={{ marginTop: "10px" }}>
                <option value="1" selected>
                  a-z
                </option>
                <option value="2">z-a</option>
                <option value="3">high</option>
                <option value="4">low</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <button
            className="search-btn"
            style={{
             padding: "7px",
             width: "200px",
             border: "none",
             backgroundColor: "#057AFF",
             color: "#DBE1FF",
            fontWeight: "600",
             fontSize: "15px",
             borderRadius: "5px",
             cursor: "pointer",
             marginLeft: "635px",
             marginRight: "20px",
             marginTop: "70px"
             
           }}
          >
            SEARCH
          </button>
          <button className="reset-btn" style={{ 
             padding: "7px",
             width: "200px",
             border: "none",
             backgroundColor: "#C149AD",
             color: "#DBE1FF",
            fontWeight: "600",
             fontSize: "15px",
             borderRadius: "5px",
             cursor: "pointer"}}>RESET</button>
        </div>
        <div >
      <div className="productCards" style={{
display: "flex",
flexWrap: "wrap",
alignItems: "center",
marginTop: "100px",
gap: "80px",
cursor: "pointer",

}}>
{card && 
  card.map((el, index) => {
    return (
      <div key={index} style={{ width: "300px",  }}>
        <Card data={el.attributes}></Card>
      </div>
    );
  })}
</div>
      </div>
      </div>


    </div>
  );
}


export default Products;
