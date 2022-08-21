function PlusMinus(props){
  function handle(e){
    if(e.target.id === "plus"){
      props.handle({name: props.section, value: 1})
      return;
    }
    props.handle({name: props.section, value: -1})
  }
  return (<>
    <img src="./icons/plus_icon.png" id="plus" onClick={(e) =>handle(e)}/>
    <img src="./icons/minus_icon.png" id="minus" onClick={(e) => handle(e)}/>
    </>
  )
}

function Data(props){
  return (
    <div>
      Header: {props.data.header},
      Left: {props.data.left},
      Article: {props.data.article},
      Right: {props.data.right},
      Footer: {props.data.footer}
    </div>
  )
}

function read(){
  return new Promise((resolve, reject) => {
    const url = "/data";
    superagent
      .get(url)
      .end((err, res)=> {
        err ? reject(null) : resolve(res.body);
      });
  });
}

function update(section, value){
  return new Promise((resolve, reject) => {
    const url = `/update/${section}/${value}`;
    superagent
      .get(url)
      .end((err, res) => {
        err ? reject(null) : resolve(res.body);
      });
  });
}

function App(){
  const [data, setData] = React.useState({
    header: 0,
    left: 0,
    article: 0,
    right: 0,
    footer: 0
  })

  React.useEffect(() => {
    //read db data and update UI
    const response = read()
      .then(res => {
        setData(res)
      });
  }, [])
  
  function handle(section){
    //update db & local state
    const response = update(section.name, section.value)
      .then(res => {
        setData(res)
      })

  }
  
  return(
    <div className="container">
      <Header handle={handle} data={data}/>
      <Left handle={handle} data={data}/>
      <Article handle={handle} data={data}/>
      <Right handle={handle} data={data}/>
      <Footer handle={handle} data={data}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);