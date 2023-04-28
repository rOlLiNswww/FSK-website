import React, {Component} from 'react';
import "./signUp.css"

class Index extends Component {
    render() {
        return (
            <div>
                <img src={[require("./logo3.png")]} className="logo"/>
                <div className="darkBox">
                    <form action="" className="signForm">
                        <h1 className="title">Sign up</h1>
                        <div className="inputContainer">
                            <input type="text" name="first_name" className="input"/>
                            <label className="label">First Name:</label>
                        </div>
                        <div className="inputContainer">
                            <input type="text" name="last_name" className="input" />
                            <label className="label">Last Name: </label>
                        </div>
                        <div className="inputContainer">
                            <input type="email" name="email" className="input"/>
                            <label className="label">Email</label>
                        </div>
                        <div className="inputContainer">
                            <input type="tel" name="phone" className="input" pattern="[0-9]{10}"/>
                            <label className="label">Mobile Number:</label>
                        </div>
                        <div className="inputContainer">
                            <select name="Gender" className="date">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <label className="label">Gender</label>
                        </div>
                        <div className="inputContainer">
                            <input type="date" name="birthday" className="date" placeholder=" "/>
                            <label className="label">Date of birth</label>
                        </div>
                        <input type="submit" className="submitBtn" value="Save"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Index;