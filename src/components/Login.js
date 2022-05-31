import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  const [ user , setUser ]= useState("");
  const [ userErr , setUserErr ] = useState(false);
  const [ contact, setContact ] = useState("")
  const [ contactErr, setContactErr ] = useState(false)
  const [ password, setPassword ] = useState("")
  const [ passwordErr , setPasswordErr ] = useState(false)

  //Name/ Email
  function emailHandler(e){
    let item = e.target.value;
    if(item.length<4){
      setUserErr(true)
    }
    else{
      setUserErr(false)
    }
    setUser(item)
    //console.warn(e.target.value) this for shown live result what we enter in console
  }

  // Conatct or Mobile Number
  function numberHandler(e){
    let mob = e.target.value;
    if(mob.length<9){
      setContactErr(true)
    }
    else{
      setContactErr(false)
    }
    setContact(mob)
    
    //console.warn(e.target.value)
  }

  //password 
  function passwordHandler(e){
    let pwd = e.target.value;
    if(pwd.length<6){
      setPasswordErr(true)
    }
   
    else{
      setPasswordErr(false)
    }
    setPassword(pwd)
    
    //console.warn(e.target.value)
  }
 function submitHandler(e){
   if(user==="" || user===null || contact==="" || contact===null || password==="" || password===null){
     alert("invalid data")
   }
   else{
     alert("all good")
   }
   e.preventDefault();
 }
  return (<div>
      
     <h3 className="text-center">Login-Page</h3>
     <form className="w-50 mx-auto" onSubmit={submitHandler}>
         <label className="form-label">Username or Email:</label>
         <input type="text" className="form-control" onChange={emailHandler} />
         {
           userErr ? <span className="text-danger">Email Error</span> : null
         } <br />
         <label className="form-label">Mobile No:</label>
         <input type="number" className="form-control"  onChange={numberHandler}/>
         {
           contactErr ? <span className="text-danger">Number invalid</span> : null
         } <br/>
         <label className="form-label">Password: </label>
         <input type="password" className="form-control" onChange={passwordHandler} />
         {
           passwordErr ? <span className="text-danger">Password Error</span> : null
         } <br />
        <center>
          <button type="submit" className="btn btn-secondary m-2"> Submit</button> 
          <Link to="" className="btn btn-secondary m-2"> Go Back</Link>
        </center> 
     </form>
    
    
    
    
    </div>
  )
}
