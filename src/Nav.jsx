import React from 'react';
import './Nav.css'
class Nav extends React.Component{

    render(){
        return(
            <div className="nav">
            <div className="ham">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <h1>Telegram</h1>
            <div className="search"></div>
            </div>
        )
    }
}
export default Nav;