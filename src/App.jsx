import React from 'react';
import Nav from './Nav.jsx';
import Chat from './Chat.jsx';
class App extends React.Component{
    render(){
return(
    <section>
       <Nav header="Telegram" leftDivClass="ham" rightDivClass="search"></Nav>
       <Chat></Chat>
       </section>
    );
    }
    }
    export default App;