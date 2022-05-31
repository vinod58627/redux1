import React, {useState} from 'react'
import Axios from 'axios'

 
export default function HSignup(props){

  
    
    var [dataUser, SetStateDataUser ]= useState({
                                                  name : '',
                                                  email :'',
                                                  contact :'',
                                                  gender : '',
                                                  age: '',
                                                  url :''
                                                  })
    


let formDataHandler=(e)=>{
  SetStateDataUser({...dataUser,[e.target.name]: e.target.value}) 
}

 
   let submitHandler=(e)=>{
    e.preventDefault();
    var FormData={
        name: `${dataUser.name}`,
        email: `${dataUser.email}`,
        contact: `${dataUser.contact}`,
        age: `${dataUser.age}`,
        gender : `${dataUser.gender}`,
        url: `${dataUser.url}`

    }
    
      if(name==="" || email===null || contact==="" || age===null || gender==="" || url===null){
        alert("invalid data")
      }
      else{
        alert("all good")
      }
     
    

       
        var url= `http://localhost:7075/vin`

       // window.alert(JSON.stringify(FormData));
        Axios.post(url, FormData).then(()=>{window.alert('Account Created');
                                           props.history.push('/red2')
                                        }
        )
        .catch(()=> window.alert('Acount rejected'))
    }
    
    



    
        console.log(props)


        var {name, email, contact , age , gender, url} = dataUser


        return(<div className="m-4 container">


          <h2 className="text-center"> User Registration Form </h2>

            <form onSubmit={submitHandler} className="container">
               <div>
                <label className="form-label">Name</label>
                <input className="form-control" type="text" value={name} name="name" placeholder='enter your Name' onChange={formDataHandler}/>
                <p>{name}</p>
                </div>
                <div>
                <label className="form-label">Email</label>
                <input className="form-control" type="email" value={email} name="email" placeholder='enter your Email' onChange={formDataHandler}/>
                <p>{email}</p>
                </div>
                <div>
                <label className="form-label">Phone</label>
                <input className="form-control" type="number" value={contact} name="contact" placeholder='enter your contact number' onChange={formDataHandler}/>
                <p>{contact}</p>
                </div>
                <div>
                <label className="form-label">Age</label>
                <input className="form-control" type="number" value={age} name="age" placeholder='enter your Age' onChange={formDataHandler}/>
                <p>{age}</p>
                </div>
                <div>
                    <label className="form-label">Gender</label>
                      <input list="browsers" className="form-control"  name="gender" value={gender} placeholder='Select your Gender' onChange={formDataHandler} />

                      <datalist id="browsers">
                        <option value="Male" />
                        <option value="Female" />
                        <option value="Others" />
                      </datalist>
                
                </div>
                <div>
                <label className="form-label">Picture url</label>
                <input className="form-control" type="file" value={url} name="url" placeholder='post or enter image url from external link' onChange={formDataHandler}/>
                <p>{url}</p>
                </div>

                <button type="submit" className="btn btn-primary m-2">Create Account</button>






            </form>


        </div>)
}