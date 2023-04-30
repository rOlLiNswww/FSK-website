import React, {Component} from 'react';
import "./login.css"

class Index extends Component {
    render() {
        return (
            <div>
                <div className="darkBox">
                    <p className="message">Welcome to FSK!</p>
                    <input className="loginInput" type="text" name="" placeholder="Username/Email"/>
                    <input className="loginInput" type="password" name="" placeholder="Password"/>
                    <p className="forget">forget password?</p>
                    <botton className="button">Login</botton>
                    <botton className="button">SignUp</botton>
                    <botton className="google"><img className="googleImg" src={[require("./google.png")]} alt="google"/></botton>
                </div>
                <img src={[require("./logo.png")]} alt="logo" className="logo"/>
            </div>
        );
    }
}

export default Index;