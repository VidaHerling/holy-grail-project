function Article(props){
  return (
    <div className="article">
      <div className="section">Article: {props.data.article}</div>
      <Data data={props.data} />
      <PlusMinus section="article" handle={props.handle}/>
    </div>
  )
}