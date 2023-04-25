import React, {Component} from 'react';
import "./profilePic.css"

class Index extends Component {
    render() {
        return (
            <div>
                <img className="dashProfilePic" src={[require("./defultProPic.jpeg")]} alt=""/>
                <p className="dName">{this.props.name}</p>
                <progress className="intimacy" max="100" value={this.props.Av}></progress>
            </div>
        );
    }
}

export default Index;