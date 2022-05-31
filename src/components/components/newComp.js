import React, { Component } from "react";

//import { connect } from "react-redux";

export default class CompOne extends Component {

  constructor(props) {

super(props);

 

this.state = {

   message: "Subscribe to "

};

  }

  styles = {

fontStyle: "italic",

color: "purple"

  };

  Buttonchange = () => {

this.setState({

   message: "Thank you for subscribing"
   

});

  };
  style = {

    fontStyle: "italic",
    
    color: "red",
    backgroundColor:'green'
    
      };

 

  render() {

return (

   <div className="App">

     <h3 style={this.styles}>{this.state.message}</h3>

     <button onClick={this.Buttonchange} style={this.style}>Subscribe</button><hr />
     

   </div>

);

  }

}