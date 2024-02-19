//App.js

import './App.css';
import React from "react";
import {Content} from "./components/content/content";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/footer";
import {Action} from "./models/action";
import logo from './assets/img/logo.png';

function App() {

    const actions=  [
        new Action( 'icon' ,null, 'help' ,  null,null,null,'راهنما' ),
        new Action( 'icon' ,null, 'notifications_active ',null,null,null,'هشدار ها' ),
        new Action( 'avatar' ,null, 'person' ),
        new Action( 'text' , 'کاربر تستی'  ,null,null,(event) => alert('username clicked') )
    ]
    return (
        <div className="notificationsFrame">
            <div className="panel">
                <Header  actions={actions} appTitle="سامانه تستی "  logoSrc={logo}/>
                <Content>
                    <h1>1</h1>
                    <h1>2</h1>
                    <h1>3</h1>
                </Content>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
