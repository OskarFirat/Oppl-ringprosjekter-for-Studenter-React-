import React, { Component } from 'react'
import fire from './Fire';

export default class In extends Component {

logOut = () =>{
  fire.auth().signOut();
}

  render() {
    return (
      <div>
         <p>Du er logget inn</p>
         <button onClick={this.logOut}>Logg Out</button>
      </div>
    )
  }
}
