import Axios from "axios";
export const KUMAR_USERS = "KUMAR_USERS";





export const kumarPosts = ()=> {
   return  {    
        type: KUMAR_USERS, 
        payload: 
                   Axios.get("http://localhost:7075/posts").then((res) =>  res.data)
        
        
          }
      };
      