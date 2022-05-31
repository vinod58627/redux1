import React, {useState, useEffect} from 'react'
import Pagination from './pg2'
import Post from './pg1'
//import Axios from 'axios'


var url= 'https://jsonplaceholder.typicode.com/posts';


export default function Pg() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
  
   /* useEffect(()=>{
        Axios.get(url).then((res)=> setPosts(res.data)).catch((error) => setError(error.message), [])
        console.log(posts)
    })*/
    useEffect(() => {
      fetch(url)
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error('something went wrong while requesting posts');
        })
        .then((posts) => setPosts(posts))
        .catch((error) => setError(error.message));
    }, []);
  
    if (error) return <h1>{error}</h1>;
  
    return(<div>


        {/*
            posts.map((res,i)=>{
                return(<div key={i}>
                    <h1>{res.id}</h1>
                    <p>{res.title}</p>
                    <p>{res.data}</p>


                </div>)
            }
        )
        */}
    
    {posts.length > 0 ? (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}
  </div>)

}
