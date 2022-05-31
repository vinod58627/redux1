import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

var url='http://localhost:7075/posts'


export default function HooksUser (props){

    var [ userData , SetStateUserData] = useState([])

    
  /* function getData(){
        Axios.get(url).then((res)=>SetStateUserData(res.data),[])

    }*/

    useEffect(()=>{
        Axios.get(url).then((res)=>SetStateUserData(res.data),[])
        
    })
   let  DeleteHandler=(id)=>{
         if(window.confirm(`selected Record number is ${id}?`)){
         Axios.delete(`${url}/${id}`)
         //Axios.get(url).then((res)=>this.setState({data : res.data}))
         Axios.get(url).then((res)=>SetStateUserData(res.data),[])
         }
     }

    
        return(<div className='container'>
        <h2 className="text-center">Hooks With Local Api Form Handlings</h2>
        <table className="text-center table table-bordered" style={{border:'4px solid black'}}>
           
           <thead className="bg-dark text-white">
           <tr> 
           
             <th>S.No</th>
             <th>Title</th>
             <th>Body:</th>
             <th colSpan={3} >Actions</th>
             
           </tr>
           </thead>
           
         
         
        <tbody>

        {
            userData.map((res,i) =>{
            return(
            <tr key={i}>
               {/* <td>{res.id}</td>*/}
               <td>{i+1}</td>
                <td>{res.title.slice(0,25)}</td>
                <td>{res.body.slice(0,60)}</td>
                {/*<td>{res.website}</td>*/}
                <td>
                    <Link to={`/fhooks/view/${res.id}`} className="mx-2 btn btn-primary ">View</Link>
                    <Link to={`/fhooks/update/${res.id}`} className="mx-2 btn btn-secondary">Edit</Link>
                    <button onClick={()=>DeleteHandler(res.id)} className="mx-2 btn btn-danger">Delete</button>
                </td>
            </tr>)}
            )
        }
        </tbody>
        </table>
        
        
        
        
        
        
        
        </div>)
    
}