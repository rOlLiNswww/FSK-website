import React, {Component} from 'react';
import "./intimacy.css"

class Index extends Component {
    render() {
        return (
            <div>
                <div><p className="text">Familiarity<br/>Intimacy<br/>Similarity</p></div>
                <progress className="intimacy_1 " max="100" value={this.props.Fa}></progress>
                <progress className="intimacy_1 " max="100" value={this.props.In}></progress>
                <progress className="intimacy_1 " max="100" value={this.props.Si}></progress>
            </div>

        );

    }

    componentDidMount() {
        this.setColour()
    }

    setColour =()=>{
        var cor = document.getElementsByTagName("progress");

        for(var i = 0 ; i < cor.length; i++){
            if(cor.item(i).value >= 80 ){
                cor.item(i).style.accentColor="#57f396"
            }
            if(75 <= cor.item(i).value && cor.item(i).value < 80 ){
                cor.item(i).style.accentColor="#b9ff9f"
            }

            if(60 <= cor.item(i).value && cor.item(i).value < 75 ){
                cor.item(i).style.accentColor="#f7fb98"
            }

            if(40 <= cor.item(i).value && cor.item(i).value < 60 ){
                cor.item(i).style.accentColor="#ffcd89"
            }
            if(20 <= cor.item(i).value && cor.item(i).value < 40 ){
                cor.item(i).style.accentColor="#ff777b"
            }
            if(cor.item(i).value < 20 ){
                cor.item(i).style.accentColor="#f85656"
            }

        }
    }
}

export default Index;

