import React from 'react'

function Card(props) {
    const { image, title, id, price } = props.data;
  return (
    
    <div   >
        <div style={{WebkitBoxShadow: "-3px -5px 36px 0px rgba(222,211,222,1)",
MozBoxShadow: "-3px -5px 36px 0px rgba(222,211,222,1)",
boxShadow: "-3px -5px 36px 0px rgba(222,211,222,1)", width: "370px", borderRadius: "12px"}}>
        <img src={image} style={{
      width: "340px",
      height: "250px",
      borderRadius: "25px",
      marginLeft: "15px",
    }} alt="" />
    <h3 style={{
      textAlign: "center",
      color: "#394E6A",
      marginTop: "10px",
      
    }}>
      {title}
    </h3>
    <p style={{
      textAlign: "center",
      color: "#394E6A",
      marginTop: "5px",
      paddingBottom: "40px"
    
    }}>
      {price}
    </p> 
        </div>

    </div>
  )
}


export default Card