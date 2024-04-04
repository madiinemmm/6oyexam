

function Header(props) {
  const { image, title, id, price } = props.data;
  return (
    <div style={{WebkitBoxShadow: "-3px -5px 36px 0px rgba(222,211,222,1)",
    MozBoxShadow: "-3px -5px 36px 0px rgba(222,211,222,1)",
    boxShadow: "-3px -5px 36px 0px rgba(222,211,222,1)", width: "370px", borderRadius: "12px"}} > 
                 <img src={image} style={{
      width: "350px",
      height: "230px",
      borderRadius: "25px",
      marginLeft: "10px",
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
      paddingBottom: "20px"
    }}>
      {price}
    </p></div>
  )
}

export default Header