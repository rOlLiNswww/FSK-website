import React, {Component} from 'react';
import "./friend.css"
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
                <div className="friendBox" ref="input1" >
                    <div className="infoBox"><ProfilePic name={this.props.name} Av={this.props.Av}/></div>
                    <div className="infoBox"><Intimacy Fa={this.props.Fa} In={this.props.In} Si={this.props.Si}/></div>
                    <img className="buttonImg" src={[require("./editBtn.png")]} alt=""/>
                    <img className="buttonImg" onClick={()=>{this.showBox();
                        this.showPie(this.refs.c1.id,41,53,51,56,14);
                        this.showFlow(this.refs.c2.id,65,75,78,70,50,70,75,80,85,95,95)}} src={[require("./infoBtn.png")]} alt=""/>
                    <img className="buttonImg" src={[require("./deleteBtn.png")]} alt=""/>
                    <div className="Info" ref="infoBox">
                        <p className="subTitle">Personality</p>
                        <div ref="c1" id={this.uniqueId()} className="pie"></div>
                        <p className="subTitle2">Intimacy Flow</p>
                        <div ref="c2" id={this.uniqueId()} className="flowChart"></div>
                        <p className="font">Already Meet: 300 DAYS</p>
                    </div>
            </div>
        </div>
        );
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
        console.log()
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
                    showInLegend: true,
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
        Highcharts.chart(id,options);
    };
    showFlow=(id,Ja,Fe,Ma,Ap,May,Ju,Jul,Au,Se,Oc,No,De)=> {
        var options = {
            title: {
                text:null
            },
            chart: {
                backgroundColor: "rgba(89,102,114,0)"
            },
            xAxis: {
                labels: {
                    style: "#ffffff"
                },
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                labels: {
                    style: "#ffffff"
                },
                title: {
                    style: "#ffffff",

                    text: 'Percentage (\xB0%)',
                },
                categories: ['0', '10', '20', '30', '40', '50',
                    '60', '70', '80', '90', '100'],
                plotLines: [{
                    value: 0,
                    width: 1,

                }]
            },
            tooltip: {
                valueSuffix: '\xB0%'
            },

            legend: {
                enabled:false
            },
            credits: {
              enabled:false
            },
            series: [
                {
                    name: 'Intimacy %',
                    data: [Ja, Fe, Ma, Ap, May, Ju, Jul,
                        Au, Se, Oc, No, De]
                }
            ],
        }
        Highcharts.chart(id,options);
    }
    uniqueId=()=> {
        var a = Math.random,
            b = parseInt;
        return (
            Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a())
        );
    }
}

export default Index;