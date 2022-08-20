function Left(props){
  return (
    <div className="left">
      <div className="section">Left: {props.data.left}</div>
      <Data data={props.data} />
      <PlusMinus section="left" handle={props.handle}/>
    </div>
  )
}