import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { vinPosts } from '../redux/Action/action4'
//import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import Axios from 'axios'


var url ="http://localhost:7075/vin"
function Red2(props) {

    useEffect(()=>{
        props.vinPosts();
        console.log(vinPosts)
    }, [])
    let  DeleteHandler=(id)=>{
        if(window.confirm(`Do you want delete this ${id} person details?`)){
        Axios.delete(`${url}/${id}`).then(window.confirm("do You want to delete"))
        //Axios.get(url).then((res)=>this.setState({data : res.data}))
        //Axios.get(url).then((res)=>SetStateUserData(res.data),[])
        props.vinPosts();
        
        
        }
    }
    
  return (<div>


      <table className="text-center table" style={{border:'2px solid green'}}>
          <thead className="bg-dark text-white">
              <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th> Contact</th>
                  <th colSpan={3}>Actions</th>
              </tr>
          </thead>
          <tbody>

       

      {
          props.vin.vin.map((res,i)=>{
              return(<tr key={i}>
                    <td>{i+1}</td>
                    <td>{res.name}</td>
                    <td>{res.email}</td>
                    <td> {res.gender}</td>
                    <td>{res.age}</td>
                    <td>{res.contact}</td>
                    <td>
                        <Link to={`/red2/rview/${res.id}`} className="btn btn-primary mx-2">View</Link>
                        <Link to={`/red2/rupdate/${res.id}`} className="btn btn-secondary ">Update</Link>
                        <button onClick={()=>DeleteHandler(res.id)} className="btn btn-danger mx-2">Delete</button>
                    </td>


                </tr>)
          })
      }
         </tbody>
      </table>




  </div>)
}



const mapStatetoProps=(state)=>{
    return {
        vin: state.vinReducer
    }
}

export default connect(mapStatetoProps, {vinPosts})(Red2)