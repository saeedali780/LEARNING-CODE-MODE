const Wrapper = ({children, color = "green"}) => {
  return (
    <div style={{ border: "2px solid black", color: color, padding: "10px", margin: "10px" }}>
      {children}
    </div>
  )
}

export default Wrapper