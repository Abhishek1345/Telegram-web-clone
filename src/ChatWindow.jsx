import React from 'react';
// import ReactDOM from 'react-dom';
import Nav from './Nav';
import './ChatWindow.css';
class ChatWindow extends React.Component{
    constructor(props){
        super(props);
        this.msgs=[];
        this.state = {
            msg : []
        }
    }
    sendMessage=()=>{
        this.msg=document.getElementById("msg").value;
        if(this.msg.trim()!==""){
        document.getElementById("msg").value="";
        this.setState({msg: [...this.state.msg, this.msg]})
        }
        document.getElementById("msg").focus();
    }
    componentDidUpdate() {
        console.log('component updated')
        const msgArea = document.getElementById("msgArea")
        if (!msgArea) {
            return
        }
        const bounds = msgArea.getBoundingClientRect()
        console.log(bounds);
        // window.scrollTo(0,(bounds.height)-(window.innerHeight+bounds.top)+50)
        window.scrollTo(0,window.innerHeight);
    }
    render(){
        return(
            <section id="msgAreaSection">
            <Nav header={this.props.header} leftDivClass="back" rightDivClass="options" abb={this.props.dp} 
            dpClass="dp"></Nav>
            <div className="chat msgArea" id="msgArea">
           
                {this.state.msg.map((msg, i)=> {
                   return (<div key={i} className='msgBox'>{msg}</div>)
                })}
            </div>
            <div className="msgSender">
                <input type="text" id="msg"/>
            <div className="send" onClick={this.sendMessage}></div>
            </div>
            </section>
        );

        
    }
}
export default ChatWindow;