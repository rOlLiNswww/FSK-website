import React, {Component} from 'react';
import "./sidebar.css"

class Index extends Component {
    render() {
        return (
            <div>
                <div className="sideBar">
                    <div className="home sideBarButton"></div>
                    <div className="add sideBarButton"></div>
                    <div className="person sideBarButton"></div>
                    <div className="light sideBarButton"></div>
                    <div className="exit sideBarButton"></div>
                </div>
            </div>
        );
    }
}

export default Index;