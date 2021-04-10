import React from 'react';
import Chores from './Chores';

import { Component } from 'react';

class ChoreCreator extends React.Component{
    constructor(props){
        super(props)

    this.state={
        name:"",
        chore:"",
        completed:false
    }
    }
    handleUpdates(){
        fetch("http://localhost:8080/chores",{method:'POST', headers:{'Content-Type':'application/json'},
    body:JSON.stringify({name:this.state.name,chore:this.state.chore,completed:this.state.completed})})
    .then(data =>{
        this.props.handleCurrentChores()
        this.setState({name:""})
        this.setState({chore:""})
        this.setState({completed:false})
    })
    }
    handleAddNewName(event){
        return(
            this.setState({
                name:event.target.value
            })
        )
    }
    handleAddNewChore(event){
        return(
            this.setState({
                chore:event.target.value
            })
        )
    }
    render(){
        return(
            <div>
                <label>
                    Name:
                    <input value={this.state.name} onChange={(event)=>this.handleAddNewName(event)}></input>
                    Chore:
                    <input value={this.state.chore} onChange={(event)=>this.handleAddNewChore(event)}></input>
                    <button onClick={(event)=>this.handleUpdates(event)}>Add Information</button>
                </label>
            
            
            </div>
        )
    }
}




export default ChoreCreator;