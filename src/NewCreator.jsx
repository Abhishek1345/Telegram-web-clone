import React from 'react';
import './NewCreator.css';
class NewCreator extends React.Component{
    create=()=>{
        
    }
    render(){
        return(
            <div className="newCreator">
            <input type="text" placeholder={this.props.firstPH}/>
            <input type="text" placeholder={this.props.secondPH}/>
            <button onClick={this.create}>create</button>
            <button onClick={this.close}>close</button>
            </div>
        )
    }
}
export default NewCreator;