import React, { useState } from 'react'

export default function TarFun(){

    const [state, setState ] = useState({ name:""})

    const handleName=(event)=>{
         setState({...state,[event.target.name]: event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        alert("name is   " + state.name)
    }
    return(<>
    <h3 className="text-center"> Target a value From function Component</h3>
   
    <form onSubmit={handleSubmit.bind(this)}>
        <label>
            Name: <input type="text" name="name" value={state.name} onChange={handleName.bind(this)} />
        </label>
        <button type="submit" > Submit</button>
    </form>
    <p>{state.name}</p>
    
    
    
    </>)
}









/*import React, {useState } from 'react'

export default function TarFun(props) {

    const [dataUser , setDataUser]= useState({
        name:""
    })

    const handleName=(event)=>{
        setDataUser({...dataUser,[event.target.name]: event.target.value})
    }
    const handleSubmit=(event)=>{
        
       alert("Name is   " + dataUser.name)
      
       event.preventDefault();

    }
   
  return (<div>

           <h1 className="text-center">Target Value Using Hooks</h1>
           <form onClick={handleSubmit.bind(this)}>
               <label>
                Name: <input type="text" name="name" value={dataUser.name} onChange={handleName.bind(this)} />
               </label>
               <button type="submit" > Submit</button>
               
           </form>

           {dataUser.name}
      
      </div>)
}*/
