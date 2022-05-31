import React,{useState , useEffect} from 'react'
import Axios from 'axios';

var url="https://fakestoreapi.com/products"
export default function About() {
  const [user, setUser] = useState([]);
  const [count , setInc ] = useState('0')

  useEffect(()=>{
    Axios.get(url).then(res=>setUser(res.data))
  }, [])
    return (
      <div className="row m-3">
         {
            user.map((res,i)=>{
                return(<div key={i} className="row mx-auto" style={{border:'1px solid black'}}>
                  
                    <div className="col-lg-4 mx-auto" style={{border:'1px solid black'}}>
                      <img src={res.image} className="card-img-top m-2 mx-auto" style={{width:'300px', height:'300px'}} alt="Image Not Found " />
                      
                    </div>
                    <div className="col-lg-6">
                          
                          <h3>{res.title}</h3>
                          
                          <p>{res.description}</p>
                          <span>${res.price}</span>
                          <div>
                              <button type="button" onClick={()=> setInc(count-1)}> - </button>
                              <input type="text" style={{width:'30px'}}  />
                              <button type="button" onClick={()=> setInc(count+1)} > + </button>
                          </div><br />
                          <button type="button" className="btn btn-primary">Add To Cart</button> 
                          <button type="button" className="btn btn-secondary mx-2">Buy</button> 
                          </div>
                    </div>


                    
                    )
            })
        }
       <input type="file" className='mx-3'/>


       
        </div>)
  }
  
  
  
 
        
