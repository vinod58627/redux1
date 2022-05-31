
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'



var apiurl= `http://localhost:7075/vin`
export default function Edit(props){
    const [dataUser, setDataUser] = useState({
        name:'',
        email:'',
        age:'',
        contact:'',
        gender:'',
        url:'' 
    })
    
    let { idno }= useParams()
    
    useEffect(()=>{
       
        Axios.get(`${apiurl}/${idno}`).then((res)=> setDataUser(res.data))
    }, [idno])
 
    let formDataHandler=(e)=>{
        setDataUser({...dataUser, [e.target.name]: e.target.value})
    }

    
    const submitHandler=(e)=>{
        
        e.preventDefault();
        
        
        var formData={
            'name':`${dataUser.name}`,
            'email': `${dataUser.email}`,
            'contact': `${dataUser.contact}`,
            'age':`${dataUser.age}`,
            'gender':`${dataUser.gender}`,
            'url':`${dataUser.url}`,
        }
        Axios.put(`${url}/${idno}`, formData).then(()=>{window.alert('Updated Successfully')});
        props.history.push('/red2').catch(()=> window.alert('Account rejected'))
    }



 


        var { name, email,contact, age , gender ,url } = dataUser
        return(<div className="container">
        <h1 className="text-center">Edit-Component </h1>

        <p>This is {idno}th User Data</p>

        <form onSubmit={submitHandler.bind(this)}>
          <div>
            <label className="form-label">Name:</label>
            <input type="text" name="name" className="form-control" value={name}  onChange={formDataHandler.bind(this)} />
          </div>
          <div>
            <label className="form-label">Email:</label>
            <input type="text" name="email" className="form-control" value={email} onChange={formDataHandler.bind(this)} read disabled/>
          </div>
          <div>
            <label className="form-label">Phone:</label>
            <input type="number" name="contact" className="form-control" value={contact} onChange={formDataHandler.bind(this)} />
          </div>
          <div>
            <label className="form-label">Age:</label>
            <input type="number" name="age" className="form-control" value={age} onChange={formDataHandler.bind(this)} />
          </div>
          <div>
            <label className="form-label">Gender</label>
            <input type="text" name="gender" className="form-control" value={gender} onChange={formDataHandler.bind(this)} readOnly disabled  />
          </div>
          <div>
            <label className="form-label">Picturn:</label>
            <input type="text" name="url" className="form-control" value={url} onChange={formDataHandler.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary"> Update</button>
          <Link to='/red2' className="btn btn-primary">Go back</Link>




      </form>
        
        
        
        
        </div>)
    }



/*
import React, { useEffect , useState} from 'react'
import Axios from 'axios'
import { Link, useParams } from 'react-router-dom';




export default function Rsignup(props) {
    const [dataUser, setData] = useState({
                                        name:'',
                                        email:'',
                                        age:'',
                                        conatct:'',
                                        gender:'',
                                        ulr:'' 
                                    })
        useEffect(()=>{
            var url="http://localhost:7075/vin"
            Axios.get(`${url}/${idno}`).then((res)=> setData(res.data))
        }, [])
     
    let formDataHandler=(e)=>{
        setData({...dataUser,[e.target.name]: e.target.value})
    }
    const submitHandler=(e)=>{
        
        e.preventDefault();
        
        var formData={
            name:`${dataUser.name}`,
            email: `${dataUser.email}`,
            contact: `${dataUser.age}`,
            age:`${dataUser.age}`,
            url:`${dataUser.url}`,
            gender:`${dataUser.gender}`
        }
        var url="http://localhost:7075/vin"
        Axios.put(`${url}/${idno}`, formData).then(()=>{window.alert('Updated Successfully')});
        props.history.push('/red2')
    }
    var  {idno} = useParams()
  var [name, email, contact, age, gender, url] = dataUser
         
  return (<div>
      <h2 className="text-center"> Update Your Data</h2>
      <form onSubmit={submitHandler.bind(this)}>
          <div>
          <label className="form-label">Name:</label>
          <input type="text" name={name} className="form-control" value={name}  onChange={formDataHandler.bind(this)} />
          </div>
          <div>
          <label className="form-label">Email:</label>
          <input type="text" name={email} className="form-control" value={email} onChange={formDataHandler.bind(this)} />
          </div>
          <div>
          <label className="form-label">Phone:</label>
          <input type="number" name={contact} className="form-control" value={contact} onChange={formDataHandler.bind(this)} />
          </div>
          <div>
          <label className="form-label">Age:</label>
          <input type="number" name={age} className="form-control" value={age} onChange={formDataHandler.bind(this)} />
          </div>
          <div>
          <label className="form-label">Gender</label>
          <input type="text" name={gender} className="form-control" value={gender} onChange={formDataHandler.bind(this)}  />
          </div>
          <div>
          <label className="form-label">Picturn:</label>
          <input type="text" name={url} className="form-control" value={url} onChange={formDataHandler.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary"> Update</button>
          <Link to="/red2" className="btn btn-primar">Go back</Link>




      </form>






  </div>
  )
}
*/

/*import React, {useState} from 'react'
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

            <form onSubmit={submitHandler.bind(this)} className="container">
               <div>
                <label className="form-label">Name</label>
                <input className="form-control" type="text" value={name} name="name" placeHolder='enter your Name' onChange={formDataHandler.bind(this)}/>
                <p>{name}</p>
                </div>
                <div>
                <label className="form-label">Email</label>
                <input className="form-control" type="email" value={email} name="email" placeHolder='enter your Email' onChange={formDataHandler.bind(this)}/>
                <p>{email}</p>
                </div>
                <div>
                <label className="form-label">Phone</label>
                <input className="form-control" type="number" value={contact} name="contact" placeHolder='enter your contact number' onChange={formDataHandler.bind(this)}/>
                <p>{contact}</p>
                </div>
                <div>
                <label className="form-label">Age</label>
                <input className="form-control" type="number" value={age} name="age" placeHolder='enter your Age' onChange={formDataHandler.bind(this)}/>
                <p>{age}</p>
                </div>
                <div>
                <label className="form-label">Gender</label>
                <input className="form-control" type="text" value={gender} name="gender" placeHolder='enter your Gender' onChange={formDataHandler.bind(this)}/>
                <p>{gender}</p>
                </div>
                <div>
                <label className="form-label">Picture url</label>
                <input className="form-control" type="text" value={url} name="url" placeHolder='past or enter image url from external link' onChange={formDataHandler.bind(this)}/>
                <p>{url}</p>
                </div>

                <button type="submit" className="btn btn-primary m-2">Create Account</button>






            </form>


        </div>)
}
*/


/*import React from 'react'

export default function Rupdate() {
  return (
    <div>Rupdate</div>
  )
}*/


/*import React , {useState} from 'react'
import Axios from 'axios'

var url= 'http://localhost:7075/vin'


export default function Rupdate(props) {
    const [dataUser, setData] = useState({
        uname:'',
        email:'',
        age:'',
        contact:'',
        gender:'',
        url:''
    })
    const formDataHandler=(e)=>{
     setData({...data,[e.target.name]: e.target.value})
    }
   
    const submitHandler=(e)=>{
        e.preventDefault()
        var FormData={
            uname: `${dataUser.uname}`,
            email:`${dataUser.email}`,
            age: `${dataUser.age}`,
            contact: `${dataUser.contact}`,
            gender: `${dataUser.gender}`,
            url: `${dataUser.url}`


        }
        Axios.post(url, FormData).then(()=>{window.alert('Account Created');
                                           props.history.push('/red2')
                                        }
        )
        .catch(()=> window.alert('Acount rejected'))

    }



  return (<div>
      <h3 className="text-center"> Reduc- Update Component</h3>
      <form onSubmit={submitHandler.bind(this)}>
          <label>
             Name:<input className='form-control' type="text" name="uname" value={uname} placeHolder='enter your Name' onChange={formDataHandler.bind(this)} />
          </label>
          <label>
              Email:<input className='form-control' type="email" name="email" value={email} placeHolder='enter Email' onChange={formDataHandler.bind(this)} />
          </label>
          <label>
              Age:<input className='form-control' type="number" name="email" value={email} placeHolder='enter Email' onChange={formDataHandler.bind(this)} />
          </label>
          <label>
              Contact:<input className='form-control' type="number" name="contact" value={contact} placeHolder='enter Mobile Number' onChange={formDataHandler.bind(this)} />
          </label>
          <label>
              Gender:<input className='form-control' type="text" name="gender" value={gender} placeHolder='select gender' onChange={formDataHandler.bind(this)} />
          </label>
          <label>
              url:<input className='form-control' type="text" name="url" value={url} placeHolder='enter image url from google' onChange={formDataHandler.bind(this)} />
          </label>
          <button type="submit" className="text-center">Submit</button>
      </form>
      
      
      
      
      </div>)
}*/
