import React, {Component} from 'react';
import "./friend.css"
import FriendInfo from "../friendInfo";
import Intimacy from "../intimacy";
import ProfilePic from "../profilePic";

import Highcharts from 'highcharts/highstock';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state={isShow:false}
    }
    render() {
        return (
            <div>
                <div className="friendBox" ref="input1" onClick={()=>{this.showBox()}}>
                    <div className="infoBox"><ProfilePic name={this.props.name} Av={this.props.Av}/></div>
                    <div className="infoBox"><Intimacy Fa={this.props.Fa} In={this.props.In} Si={this.props.Si}/></div>
                    <FriendInfo/>
                    <div className="Info" ref="infoBox">
                        <p className="subTitle">Personality</p>
                        <div id="container" className="pie"></div>
                        <div id="container1" className="flowChart"></div>
                    </div>
            </div>

        </div>
        );
    }

    componentDidMount() {
             this.showPie(2,41,53,51,56,14)
    }

    showBox = ()=>{
        if(this.state.isShow===false){
            this.refs.input1.style.height="490px"
            this.refs.infoBox.style.display="block"
            this.setState({isShow:true})
        }
        if(this.state.isShow===true){
            this.refs.input1.style.height="135px"
            this.refs.infoBox.style.display="none"
            this.setState({isShow:false})
        }
    }

    showPie=(id,Ra,Pe,Im,Ex,In)=> {
        var options = {
            chart: {
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: 'rgba(0,0,0,0)',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: null,
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            colors: ['#f29762', '#8484eb', '#403f47','#a16777','#89c0da','#90ed7d'],
            credits: {
                enabled: false
            },
            series: [{

                type: 'pie',
                name: 'Percentage',
                data: [
                    ['Rational',   Ra],
                    ['Perceptual', Pe],
                    {
                        name: 'Conservative',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Impulsive',    Im],
                    ['Extroverted',     Ex],
                    ['Introverted',   In]
                ]
            }]
        }
        Highcharts.chart('container',options);
    };
}

export default Index;