import React, {Component} from 'react';
import "./profilePage.css"

class Index extends Component {
    render() {
        return (
            <div>
                <div className="profilePicBox"><img className="profilePic" src="src/tony.png" alt=""/>
                    <p className="name"> Tony Stark</p></div>
                <div className="profileInfo">
                    <p className="subTitle AB">About</p>
                    <div className="about blockStyle">
                    <p className="titleInfo"><img className="img" src={[require("./age.png")]} alt=""/>Age:</p> <p className="info">51</p>
                    <p className="titleInfo"><img className="img" src={[require("./income.png")]} alt=""/>Income: </p> <p className="info">10000000k</p>
                    <p className="titleInfo"><img className="img" src={[require("./email.png")]} alt=""/>Email:</p> <p className="info">tony_stark@gmail.com</p>
                    <p className="titleInfo"><img className="img" src={[require("./phone.jpeg")]} alt=""/>Number#:</p> <p className="info">0483xxxx64</p>
                    <p className="titleInfo"><img className="img" src={[require("./friendShip.png")]} alt=""/>Close Friend with:</p> <p className="info">Peter, Pepper, War Machine</p>
                    </div>
                    <p className="subTitle SD">Self Description</p>
                    <div className="SD blockStyle">&nbsp;&nbsp;&nbsp;&nbsp;I am rich! that enough!</div>
                    <p className="subTitle per">Personality</p>
                    <div className="personality blockStyle">
                        <div id="container" className="pie"></div>
                            </div>
                        <button className="editBtn"><img src={[require("./editPicBtn.png")]}/></button>
                </div>
            </div>
        );
    }
}

export default Index;