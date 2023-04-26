import React, {Component} from 'react';
import Sidebar from "./components/Sidebar";
import TopBar from "./components/topBar";
import "./App.css"
import FriendBox from "./components/DashBoard/friendBox";



class App extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <TopBar/>
                <FriendBox name="Rollins" Fa={60} In={70} Si={80} Av={95}/>
                <FriendBox name="Andy" Fa={70} In={75} Si={90} Av={95}/>
                <FriendBox name="Albert" Fa={20} In={30} Si={60} Av={45}/>
            </div>
        );
    }
}

export default App;