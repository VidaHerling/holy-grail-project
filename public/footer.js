function Footer(props){
  return (
    <div className="footer">
      <div className="section">Footer: {props.data.footer}</div>
      <Data data={props.data} />
      <PlusMinus section="footer" handle={props.handle}/>
    </div>
  )
}