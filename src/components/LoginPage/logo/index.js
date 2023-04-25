import React, {Component} from 'react';
import './logo.css'

class Index extends Component {
    render() {
        return (
            <div>
                <img src={[require("./logo.png")]} alt="logo" className="logo"/>
            </div>
        );
    }
}

export default Index;