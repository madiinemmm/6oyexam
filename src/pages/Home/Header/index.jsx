

function Header(props) {
  const { image, title, id, price } = props.data;
  return (
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
    }}>
      {title}
    </h3>
    <p style={{
      textAlign: "center",
      color: "#394E6A",
      marginTop: "10px",
    }}>
      {price}
    </p></div>
  )
}

export default Header