
// Class Components target
import React, { Component } from 'react'

export default class TarCls extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       name:''
    }
   /* this.handleName= this.handleName.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)*/
  }
  /*state={
    name: ''
  }*/

  handleName(e){
    this.setState({name: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault()
    alert("Name is  " + this.state.name)
  }

  render(){
    return(<>
    
    <form onSubmit={(e)=>this.handleSubmit(e)}> {/*onSubmit={this.handleSubimt} */}
  <label>
    Name: <input type="text" className="form-control" value={this.state.name} onChange={(e)=>this.handleName(e)} />  {/*onChange={this.handleName} */}

   
  </label>
  <br />
  <button type="submit" className="btn btn-secondary">Submit</button>
  
  


    </form>
    {this.state.name}

    
    
    
    
    
    
    </>)



  }



}









/*import React, { Component } from 'react'

export default class Target extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (<div>
      <h1 className="text-center">Target Values in Class Components</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      
      </div>
    )
  }
}*/

