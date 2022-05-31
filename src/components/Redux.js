/*import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { connect} from 'react-redux'

function Redux(props) {

  const dispatch= useDispatch();
  const increment=()=>{
    dispatch({type: "INC"})
    console.log(decrement)
  }
  const decrement=()=>{
    dispatch({type: "DEC"})
    console.log(increment)
  }
  const add=()=>{
    dispatch({type: "ADD",
              payload: 10})
              console.log(add)
  }
  return (<>



    <div>Redux</div>
    <h3 className="text-center"> Counter Examples from redux</h3>
    <h4 className="text-center p-3">{props.count}</h4>
    <div className="text-center">
    <button className="btn btn-primary mx-3" onClick={increment}>INC</button>
    <button className="btn btn-secondary mx-3" onClick={decrement}> DEC</button>
    <button className="btn btn-secondary mx-3" onClick={add}> ADD</button>
    </div>
    
    </>);
  
}
const mapStateToProps = (state) => {
  console.log("this is state", state);
  return {
    count : state.reducerFn
  };
};
export default connect(mapStateToProps, null)(Redux);*/

//import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { connect } from 'react-redux'
//import CompOne from './components/newComp';
//import CompTwo from './components/CompTwo';
//import Buinder from './components/bind'
//import Bind1 from './components/bind1'


import { useSelector, useDispatch } from "react-redux";


function App() {

  const counter = useSelector((state)=> state.counter)
  const dispatch= useDispatch();
  const increment=()=>{
    dispatch({type: "INC"})
    console.log(decrement)
  }
  const decrement=()=>{
    dispatch({type: "DEC"})
    console.log(increment)
  }
  const add=()=>{
    dispatch({type: "ADD",
              payload: 10})
              console.log(add)
  }


  return (<>
  {/*} <CompOne />
   <CompTwo />
   <Buinder />
  <Bind1 /> */}

  <h3 className="text-center"> Counter Examples from redux</h3>
  <h4 className="text-center p-3">{counter}</h4>
  <div className="text-center">
  <button className="btn btn-primary mx-3" onClick={increment}>INC</button>
  <button className="btn btn-secondary mx-3" onClick={decrement}> DEC</button>
  <button className="btn btn-secondary mx-3" onClick={add}> ADD</button>
  </div>
  
  </>);
}
export default App;
