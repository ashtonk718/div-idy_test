import ListGroup from "./components/ListGroup";

function App() {




let items = ["New York", "San Fransico", "London", "Paris", "Tokyo"];

//const message = items.length === 0 ? <p>No item found</p> : null

//const getMessage = () => {
  //return (<><p>No item found</p></>);}

//if(items.length === 0)
//return (<><h1>List</h1><p>No item found</p></>);

  return (
    <>
    <h1>List</h1>
  <ul className="list-group">
  {items.map( item => <li className="list-group-item" key={item}>{item}</li>)}

</ul>



 <h1>{import.meta.env.VITE_SECRECT}</h1>


 </>
)


}

export default App;
