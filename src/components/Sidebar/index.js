import React, {Component} from 'react';
import "./sidebar.css"
import {NavLink} from "react-router-dom";

class Index extends Component {
    render() {
        return (
            <div>
                <div className="sideBar">
                    <NavLink to="/friendBox"><div className="home sideBarButton"></div></NavLink>
                    <div className="add sideBarButton"></div>
                    <NavLink to="/profilePage"><div className="person sideBarButton"></div></NavLink>
                    <div className="light sideBarButton"></div>
                    <NavLink to="/loginPage"><div className="exit sideBarButton"></div></NavLink>
                </div>
            </div>
        );
    }
}

export default Index;