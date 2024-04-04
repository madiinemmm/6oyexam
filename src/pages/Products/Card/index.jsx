import React from 'react'

function Card(props) {
    const { image, title, id, price } = props.data;
  return (
    
    <div >
        <div>
        <img src={image} style={{
      width: "350px",
      height: "230px",
      borderRadius: "25px",
      marginLeft: "15px",
    }} alt="" />
    <h3 style={{
      textAlign: "center",
      color: "#394E6A",
      marginTop: "20px",
      marginLeft: "50px"
    }}>
      {title}
    </h3>
    <p style={{
      textAlign: "center",
      color: "#394E6A",
      marginTop: "10px",
      marginLeft: "50px"
    }}>
      {price}
    </p> 
        </div>

    </div>
  )
}


export default Card