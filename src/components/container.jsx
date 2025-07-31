const Container = ({children}) => {
  return (
        <div className="card" style={{width: "50%", marginTop : "5rem", marginLeft: "20rem"}}>
         <div className="card-body">{children}</div>
</div>
  )
}

export default Container;