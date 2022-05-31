import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


export default function HView(props) {

    const [data, setData]= useState({
        userId:'',
        title:'',
        body:''

    })
    var {idno} = useParams();
    useEffect(()=>{
        const url="http://localhost:7075/posts"
        Axios.get(`${url}/${idno}`).then((res)=>setData(res.data))
    }, [])
   

   //var {userId, title,body } = data
   console.log(data)

  return (<div>
      
      <h1> idNo is {idno}</h1>
      <h3 className="text-center">View-Component</h3>
      <h1>{data.id}</h1>
      <h2>{data.title}</h2>
      <h3>{data.body}</h3>

      <Link to="/fhooks" > Go Back</Link>
      
      
      </div>)
}
