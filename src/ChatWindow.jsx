import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import './ChatWindow.css';
class ChatWindow extends React.Component{
    constructor(props){
        super(props);
        this.msgs=[];
    }
    sendMessage=()=>{
        this.msg=document.getElementById("msg").value;
        document.getElementById("msg").value="";
this.msgs.push(
    <div className="msgBox">{this.msg}</div>
)
ReactDOM.render(
    <section>
        {this.msgs}
    </section>,
    document.getElementsByClassName("msgArea")[0]
);
    }
    render(){
        return(
            <section>
            <Nav header={this.props.header} leftDivClass="back" rightDivClass="options" abb={this.props.dp} 
            dpClass="dp"></Nav>
            <div className="chat msgArea"></div>
            <div className="msgSender">
                <input type="text" id="msg"/>
            <div className="send" onClick={this.sendMessage}></div>
            </div>
            </section>
        );

        
    }
}
export default ChatWindow;