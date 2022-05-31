import Axios from 'axios'
import React, { useState, useEffect } from 'react'


var url = 'http://localhost:7075/allData'
function FormHook(props){
    const [ data, setData] = useState([])
        

useEffect(()=>{
    Axios.get(url).then((res)=>setData(res.data))
},[])
  console.log(data)
    return(<>
    <h1>Hooks__Component</h1>

    <table className="table bordered">
        <thead>
            <tr>
                <th>Id</th>
                <th>title</th>
                <th>image</th>
            </tr>
        </thead>
        <tbody>
    {
    data.map((res, i)=>{
        return(<tr key={i}>
            <td>{res.id}</td>
            <td>{res.title}</td>
            <td><img src={res.url} style={{height:'100px', width:'100px'}} alt="no data" /></td>
            

        </tr>)
    }
    )}

</tbody>
    </table>
    
    
    </>)
}
export default FormHook;