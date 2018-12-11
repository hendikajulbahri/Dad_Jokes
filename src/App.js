import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state ={
        setup: '',
        punchline: ''
    }
}


  render() {
    let reload = () => {
      let url = `https://safe-falls-22549.herokuapp.com/random_joke`
      axios.get(url)
      .then((ambil) => {
          this.setState({
              setup: ambil.data.setup,
              punchline: ambil.data.punchline
          })
      })
  }



    return (

<div className="container">
  <center><div class="card col-6 kartu">
  <div class="card-header">
    Dad Jokes
  </div>
  <div class="card-body">
    <h3 class="card-title">{this.state.setup}</h3>
    <p class="card-text">{this.state.punchline} </p>
    <a href="#" class="btn btn-primary tombol" onClick={reload}>Reload</a>
  </div>
</div></center>
</div>


    );
  }
}

export default App;
