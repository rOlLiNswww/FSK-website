import React, {Component} from 'react';
import Sidebar from "./components/Sidebar";
import TopBar from "./components/topBar";
import "./App.css"
import {NavLink,Routes,Route} from "react-router-dom";
import FriendBox from "./components/DashBoard/friendBox";
import AddFriend from "./components/DashBoard/addFriend";
import AddNewRelationship from "./components/addNewRelationship";
import SignUp from "./components/signUp";
import LoginInfo from "./components/LoginPage/loginInfo";
import ProfilePage from "./components/profilePage";




class App extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <TopBar/>
                <FriendBox name="Rollins" Av={45} Fa={76} In={97} Si={76}/>
                <Routes>
                    <Route path="/friendBox" element={<FriendBox/>}/>
                    <Route path="/loginPage" element={<LoginInfo/>}/>
                    <Route path="/profilePage" element={<ProfilePage/>}/>
                </Routes>
            </div>
        );
    }
}

{/**/}

export default App;