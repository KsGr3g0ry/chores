import React from 'react';
import Chores from './Chores';
import { Button } from 'react-bootstrap';


class Chore extends React.Component{
    constructor(props){
        super(props)
    
    this.state={
        completed: false
    }
    }
    handleCompletedChore(){ 
        fetch('http://localhost:8080/chores/'+this.props.oneChore.id,{method:'PATCH',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({completed:!this.state.completed})})
    .then(()=> {
        this.props.handleCurrentChores();
    })
    }
    handleCompletedTurnBold(){
        return this.state.completed ? <strong>{this.props.oneChore.name}{this.props.oneChore.chore}</strong>: <span>{this.props.oneChore.name}{this.props.oneChore.chore}</span>
    }
    handleDeletionOfChores(){
        fetch('http://localhost:8080/chores/' + this.props.oneChore.id,{method:'DELETE'})
        .then(()=> {
            this.props.handleCurrentChores();
        })
    }
    render(){
        return(
            <li>
            {this.handleCompletedTurnBold()}
             {/*<span>{this.props.oneChore.name}</span>*/}
                <button onClick={()=>this.handleCompletedChore(), ()=> this.setState({completed:!this.state.completed})}>Completed</button>
                <button onClick={(event)=> this.handleDeletionOfChores(event)}>Remove</button>
            </li>
        )
    }
}





export default Chore;