import React from 'react';
import './Chat.css';
class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state={newBoxClass:""};
        this.a=0;
    }
    
 rotate=()=>{
document.getElementsByClassName("pencil")[0].classList.toggle("pencilAnime");
document.getElementsByClassName("new")[0].classList.toggle("newAnime");
if(this.a==0){
this.setState({newBoxClass:"newBox"})
this.a++;
}
else{
    this.setState({newBoxClass:""})
    this.a--;
}
}
    render(){
        return(
            <div className="chat">
            <div className="new" onClick={this.rotate}>
                <div className={this.state.newBoxClass}></div>
                <div className="pencil"></div>
            </div>
            </div>
        )
    }
}
export default Chat;
