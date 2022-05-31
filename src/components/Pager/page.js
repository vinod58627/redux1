import React from 'react'

export default function Pages({data, pageHandler}) {

    const pageNumber = ([])
    for(let i=1; i<Math.ceil(data.length/10)+1; i++){
        pageNumber.push(i);
    }
  return (<div className="text-center">

    
        <ul className="pagination ">
    {
       pageNumber.map((page,i)=><li className="page-item" key={i}>
      
         <button className="page-link" onClick={()=>pageHandler(page)}>{page}</button>
         </li> )
    }
    </ul>
  
  </div>)
}
