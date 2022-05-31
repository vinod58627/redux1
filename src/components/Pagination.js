import React from 'react'
import Axios  from 'axios'
import { useEffect, useState } from 'react'
import Pages from './Page'

export default function Pagination() {

    const [ Data, setData ] = useState([])
    const  [ perPage, setPerPage ]= useState([])
  
    useEffect(()=>{

        Axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(result=> {setData(result.data); setPerPage(result.data.slice(0,10));
                               }
                     )}, [])
    
    const pageHandler=(pageNumber)=>{
        setPerPage(Data.slice((pageNumber*10)-10, pageNumber*10));

    }
    




  return (<div className="w-50 m-auto">
      <h1 className="text-center">Pagination</h1>
    { Data.length>=1?
    
   <div>
        {perPage.map((post,i)=>{
        return(<ul key={i}> 
            <li>{post.id}</li>
            <li>{post.title}</li>
            <li>{post.body.slice(0,30)}</li>
            </ul>)
            
            
        })
       
        }
        
        <Pages data={Data} pageHandler={pageHandler} />
        
       </div>
    : 
         <p>Data Not Found</p>
    
      
   }
      
</div>)
}
