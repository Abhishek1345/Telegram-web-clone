import React from 'react';
import './Chat.css';
import NewCreator from './NewCreator.jsx';
class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state={newBoxClass:"newBox",
         sph:""
    };
        this.a=0;
    }
    
 rotate=()=>{
document.getElementsByClassName("pencil")[0].classList.toggle("pencilAnime");
document.getElementsByClassName("new")[0].classList.toggle("newAnime");
if(this.a===0){
this.setState({newBoxClass:"newBox newBoxAnime"})
this.a++;
}
else{
    this.setState({newBoxClass:"newBox"})
    this.a--;
}
}
show=(event)=>{
document.getElementsByClassName("newCreator")[0].style.display="flex";
this.setState({sph:event.target.id})

}
    render(){
        return(
            <div className="chat">
                <div className="contacts">
                    
                </div>
                <NewCreator firstPH="name" secondPH={this.state.sph}></NewCreator>
            <div className="new" onClick={this.rotate}>
                <div className={this.state.newBoxClass}>
                    <button className="createNew" onClick={this.show} id="phone no.">New Contact</button>
                    <button className="createNew" onClick={this.show} id="description">New Channel</button>
                    <button className="createNew" onClick={this.show} id="description">New Group</button>
                    {/* <button className="createNew" onClick={this.show}>New chat</button> */}
                </div>
                <div className="pencil"></div>
            </div>
            </div>
        )
    }
}
export default Chat;
