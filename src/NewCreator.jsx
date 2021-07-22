import React from 'react';
import ReactDOM from 'react-dom';
import './NewCreator.css';
class NewCreator extends React.Component{
    constructor(props){
        super(props);
        this.elems=[];
    }
    close=()=>{
        document.getElementsByClassName("newCreator")[0].style.display="none";
        document.getElementById("name").value="";
        document.getElementById("scnd").value="";
    }
  
    create=()=>{
        
        let name=document.getElementById("name").value;
        this.elems.push(
            <div className="person">
                <div className="dp">
                    {(name.toUpperCase().charAt(0))}{(name.indexOf(" ")!==-1)? name.toUpperCase().charAt(name.indexOf(" ")+1):""}
                </div>
                {name}</div>
            
        );
        ReactDOM.render(<section className="wrapper">{this.elems}</section>,document.getElementsByClassName("contacts")[0])
        this.close();
    }
    render(){
        return(
            <div className="newCreator">
            <input type="text" placeholder={this.props.firstPH} id="name"/>
            <input type="text" placeholder={this.props.secondPH} id="scnd"/>
            <button onClick={this.create}>create</button>
            <button onClick={this.close}>close</button>
            </div>
        )
    }
}
export default NewCreator;