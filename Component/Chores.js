import React from 'react';
import Chore from './Chore';


const Chores = props => {
    return(
        props.chores.map((element,id) => {
            return(
                <Chore
                key={id}
                oneChore={element}
                handleCurrentChores={()=> this.handleCurrentChores()}
                />
            )
        })
    )
}
export default Chores;