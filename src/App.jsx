import React, {Component} from 'react';
import Sidebar from "./components/Sidebar";
import TopBar from "./components/topBar";
import "./App.css"
import FriendBox from "./components/DashBoard/friendBox";
import AddFriend from "./components/DashBoard/addFriend";
import AddNewRelationship from "./components/addNewRelationship";
import SignUp from "./components/signUp";



class App extends Component {
    render() {
        return (
            <div>
                <AddNewRelationship/>
            </div>
        );
    }
}

export default App;