import React, {Component} from 'react';
import "./addFriend.css"

class Index extends Component {
    render() {
        return (
            <div>
                <div className="box">
                    <img className="addFri" src={[require("./addFri.ico")]} alt=""/>
                </div>
            </div>
        );
    }
}

export default Index;