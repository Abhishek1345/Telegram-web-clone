import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Nav.css'
class Nav extends React.Component{
    loadHome=()=>{
        ReactDOM.render(<App></App>,document.getElementById("root"))
    }
    render(){
        return(
            <div className="nav">
            <div className={this.props.leftDivClass} onClick={this.loadHome}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={this.props.dpClass}>{this.props.abb}</div>

            <h1>{this.props.header}</h1>
            <div className={this.props.rightDivClass}></div>
            </div>
        )
    }
}
export default Nav;