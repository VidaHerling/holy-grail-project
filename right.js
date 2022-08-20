function Right(props){
  return (
    <div className="right" >
      <div className="section">Right: {props.data.right}</div>
      <Data data={props.data} />
      <PlusMinus section="right" handle={props.handle}/>
    </div>
  )
}