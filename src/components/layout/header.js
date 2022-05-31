import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {

    const menu=["Home","TarCls","TarFun", "About","Life","Page","Pager","FilterId","Fhooks","Redux","Red1","Red2","F1","Dp","Login","RsignUp"]
  return (<ul className="bg-dark p-2" style={{textDecoration:'none'}} >
  {
      menu.map((res,index)=>{
          return (<li key={index} style={{display:'inline' }} className="mx-2">
                  <NavLink  className="text-white" to={`/${res.toLowerCase()}`} style={{textDecoration:'none'}} activeClassName="btn btn-danger">{res}</NavLink>
              </li>)
      })
  }
  </ul>



  
  )
}

