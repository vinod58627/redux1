import React from 'react';

class Binder extends React.Component {
   constructor(){
      super();
      this.state = {
         name: 'Rahul Bansal',
         email: null,
      };
   }

   fetch = (email) => {
      this.setState({ email: email });
   };
   render() {
      return (
         <div>
            <h1>Name: {this.state.name}</h1>
            <h1>{this.state.email ? 'Email: ${this.state.email}' : null}</h1>
            <button onClick={this.fetch.bind(this, 'qwerty@gmail.com')}>
               Fetch Email
            </button>
         </div>
      );
   }
}
export default Binder;