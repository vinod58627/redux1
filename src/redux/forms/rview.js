import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

//meterial Ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Rview() {

    const [data , setdata] = useState([])
    useEffect(()=>{
        var url="http://localhost:7075/vin";
        Axios.get(`${url}/${idno}`).then((res)=> setdata(res.data)) }, [])
        
        //params
        var {idno} = useParams();
  return (<div className="w-50 mx-auto">
      <h3 className="text-center"> Redux- View Component</h3>
    
    
    <Card style={{border:'3px solid black'}}>
        <span className='text-center'><small> Idno is <strong> {idno}</strong></small><h4 className='text-center'> User - Details</h4></span><hr />
    <div className="row">
        <div className="col col-lg-6 my-4 ml-4 m-auto">
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                          <p> {data.name}</p>
                          </Typography>
                          <Typography variant="body2" color="text.primary">
                          <p>{data.email}</p>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          <p>  {data.gender}</p>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          <p>  {data.contact}</p>
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small">Share</Button>
                          <Button size="small">Learn More</Button>
                      </CardActions>
                    </div>
                    <div className="col col-lg-4" style={{marginRight:'30px'}} >
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          style={{height:'300px', width:'250px'}}
                          image={data.url}
                        />
                    </div>
                  </div>
                  </Card>
    <Link to="/red2" className="btn btn-secondary"> Go back</Link>
    
</div>)
}
/*
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
*/