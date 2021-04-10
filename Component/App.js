import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chores from './Component/Chores'
import ChoreCreator from './Component/ChoreCreator';

class App extends React.Component{
  constructor(props){
    super(props)

  this.state={
    chores:[]
  }
  }
  handleCurrentChores(){
    fetch("http://localhost:8080/chores")
    .then(response => response.json())
    .then(data => this.setState({choes:data}))
  }
  componentDidMount(){
    this.handleCurrentChores()
  }
  
  render(){
    return(
      <div>
      <h1>Chores</h1>
      <ChoreCreator 
      handleCurrentChores={()=>this.handleCurrentChores()}/>
      <Chores 
      chores={this.state.chores}
      handleCurrentChores={()=> this.handleCurrentChores()}/>
    </div>
    )
  }
}



export default App;
