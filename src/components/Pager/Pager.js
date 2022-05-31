import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import Page from './page'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


var url='https://jsonplaceholder.typicode.com/photos'

export default function Pager() {
    const [post , setPost ] = useState([]);
    const  [ perPage, setPerPage ]= useState([])

    useEffect(()=>{
        Axios.get(url).then(res=>{setPost(res.data); setPerPage(res.data.slice(0,10));
                                 }
        )}, [])

    
    const pageHandler=(pageNumber)=>{
        setPerPage(post.slice((pageNumber*10)-10, pageNumber*10));

    }

  return (<div className="container">
      <h1 className="text-center">Pagination For Posts</h1>
      
      <Page data={post} pageHandler={pageHandler} />
        
       <div className='row'>
         
      
 
      { post.length>=1?
    
    <tr>
         {perPage.map((post,i)=>{
         return(<Card sx={{ maxWidth: 345 }} key={i}>
                 <CardActionArea>
                   <CardMedia
                     component="img"
                     height="140"
                     image={post.url}
                     alt="green iguana"
                   />
                   <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                       Lizard
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                     {post.title}
                     </Typography>
                   </CardContent>
                 </CardActionArea>
               </Card>)
           
             
             
         })
        
         }
         
         <Page data={post} pageHandler={pageHandler} />
         
        </tr>
     : 
          <p>Data Not Found</p>
     
       
    }
     </div>
  
   
      
</div>)
}
/*import React, { useState } from "react";
import { Box, List, Tag, ListItem, Divider } from "@chakra-ui/core";
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";
import { default as data } from "./MOCK_DATA.json";

export default function App() {
  let [page, setPage] = useState(1);
  const PER_PAGE = 24;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Box p="5">
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />

      <List p="10" pt="3" spacing={2}>
        {_DATA.currentData().map(v => {
          return (
            <ListItem key={v.id} listStyleType="disc">
              <span>{v.sku}</span>{" "}
              <Divider display="inline" orientation="vertical" />
              <span> {v.category_type}</span>{" "}
              <Divider display="inline" orientation="vertical" />
              <span>
                <Tag color="#0f4211">${v.msrp}</Tag>
              </span>
            </ListItem>
          );
        })}
      </List>

      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Box>
  );
}*/
