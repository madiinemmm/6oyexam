import React from 'react'
import Navbar from '../Navbar'
import styles from './index.module.css'

function Cart() {
  return (
    <div>
         <div className="navbar_" style={{ backgroundColor: "#021431", padding: "8px" }}>
        <a href="#" style={{ marginLeft: "1300px" }}>Sign in / Guest</a>
        <a href="#" style={{ marginLeft: "20px" }}>Create Account</a>
      </div>  
      <Navbar/>
      <div>
        <h2>Your Cart Is Empty</h2>
        <p style={{
                width: "1160px",
                borderBottom: "2px solid #E2E8F4",
                marginTop: "20px",
                marginLeft: "400px",

              }}></p>
      </div>
    </div>
  )
}

export default Cart