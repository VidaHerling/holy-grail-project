function Header(props){
  return (
    <div className="header" >
      <div className="section">Header: {props.data.header}</div>
      <Data data={props.data} />
      <PlusMinus section="header" handle={props.handle}/>
    </div>
  )
}