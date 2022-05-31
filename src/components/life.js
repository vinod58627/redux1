import React, { Component } from 'react'
import Axios from 'axios';
import logo  from './images/images.jpg'

//import Image from 'react-bootstrap/Image'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default class About extends Component {

constructor(props) {
  super(props)

  this.state = {
    user:[]
  }
}
componentDidMount(){
    Axios.get('http://localhost:7075/posts').then((res=> this.setState({user: res.data})))
}
 
  render() { 

    return (<div >
        
        <h2 className="text-center">About Component</h2>
        <div className="row bg-secondary">
        
        {
            this.state.user.map((res, i)=>{
                return(<div key={i} className="col mx-0 col-lg-4"> 
                    <Card className="mx-0 my-2">
                      <CardMedia className="m-2"
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={logo}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {res.title.slice(0, 30)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                         {res.body.slice(0, 150)}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                  </div>);
                }
                )
            })
        </div>
        
        
        
</div>)
  }
}



