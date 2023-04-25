import React, {Component} from 'react';
import "./login.css"

class Index extends Component {
    render() {
        return (
            <div>
                <div className="darkBox">
                    <p className="message">Welcome to FSK!</p>
                    <input type="text" name="" placeholder="Username/Email"/>
                    <input type="password" name="" placeholder="Password"/>
                    <p className="forget">forget password?</p>
                    <botton className="button">Login</botton>
                    <botton className="button">SignUp</botton>
                    <botton className="google"><img className="googleImg" src={[require("./google.png")]} alt="google"/></botton>
                </div>
            </div>
        );
    }
}

export default Index;