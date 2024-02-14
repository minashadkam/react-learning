//App.js

import './App.css';
import React from "react";
import {Content} from "./components/content/content";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/footer";

function App() {
    return (
        <div className="notificationsFrame">
            <div className="panel">
                <Header  title="MyApp"  clickHandler={()=>alert('click on header')}/>
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
