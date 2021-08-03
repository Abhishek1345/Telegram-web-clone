import React from 'react';
import ReactDOM from 'react-dom';
import './NewCreator.css';
import ChatWindow from './ChatWindow'
class NewCreator extends React.Component{
    constructor(props){
        super(props);
        this.elems=[];
    }
    loadChat=(name,abb)=>{
        ReactDOM.render(<ChatWindow header={name} dp={abb}></ChatWindow>,document.getElementById("root"))
    }
    close=()=>{
        document.getElementsByClassName("newCreator")[0].style.display="none";
        document.getElementById("name").value="";
        document.getElementById("scnd").value="";
    }
  
    create=()=>{
        
        let name=document.getElementById("name").value;
        let abb=(name.toUpperCase().charAt(0)) + ((name.indexOf(" ")!==-1)? name.toUpperCase().charAt(name.indexOf(" ")+1):"");
        this.elems.push(
            <div className="person" onClick={()=> this.loadChat(name,abb)}>
                <div className="dp">
               {abb}
                </div>
                {name}</div>
            
        );
        ReactDOM.render(
        <section className="wrapper">
           
            {this.elems}
            </section>,
        document.getElementsByClassName("contacts")[0])
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