import React, {Component} from 'react';
import "./friendInfo.css"

class Index extends Component {
    render() {
        return (
            <div>
                <img src={[require("./editBtn.png")]} alt=""/>
                <img src={[require("./infoBtn.png")]} alt=""/>
                <img src={[require("./deleteBtn.png")]} alt=""/>
            </div>
        );
    }

}

export default Index;