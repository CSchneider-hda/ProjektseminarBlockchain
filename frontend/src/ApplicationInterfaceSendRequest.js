import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import logo from './AppLogo.svg';
import './css/frontendDesign.css';
import moment from 'moment';
import {AppMachineContract} from "./setup";
import { Redirect } from 'react-router-dom';
import ApplicationInterfaceSendToken from './ApplicationInterfaceSendToken';

class ApplicationInterfaceSendRequest extends Component {
  
  constructor(props){
    super(props)
    //Assigning default values
    //Start time is deafault unix start time
    this.state = {
      m_startTime:new Date(),
      m_duration:100,
      m_type:1,
      m_quality:1,
                 
    }
    
    var x=0;

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/ApplicationInterfaceSendToken' />
    }
  }
//this function handles the change in form selection
  handleChange(event){
    //Our smart contract takes the send request in the form of numbers
    //So Based on the selection we change the selection
    
    //it converts the value of time into Unix time
    if(event.target.name=='m_startTime'){
      var timeSelected=moment(event.target.value,'YYYY-MM-DD');
      this.x =timeSelected.unix();
      this.setState({[event.target.name]: this.x});
      
    }
    //It converts the type.
    // if the application selects raw then 1 is selected
    // if the pplication selects processed then 2 is selected
    if(event.target.name=='m_quality'){
      if((event.target.value=='high')&&(this.m_type==2)){
        this.m_quality=2;
      }
      else{
        this.m_quality=1;
      }
    }
    //It converts the quality to number
    //if the application selects low 

    if(event.target.name=='m_type'){
      if(event.target.value=='raw'){
        this.m_type=1;
      }
      else{
        this.m_type=2;
      }
    }    
    else{
      this.setState({[event.target.name]: event.target.value});        
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const duration=Number(this.state.m_duration);
    //Hier wurde die Adresse für unsere Umgebung geändert
    AppMachineContract.sendRequest(Number(this.x),duration,Number(this.m_type),Number(this.m_quality), { from:AppMachineContract.getAppAddress(),gas:3000000});
    alert('Request Sent'+
    '\nStart Time: '+this.x+
    '\nDuration: '+this.state.m_duration+
    '\nType: '+this.m_type+
    '\nQuality:'+this.m_quality);       
  }

 
  render() {
    return (
      
      <form onSubmit = {this.handleSubmit}>
        <fieldset className ="fieldset centered">
          <div className ="login-wrap">
            <div className ="login-html">
              <div className ="centered normalText">
              <div  ><img src={logo} className="logoApplication" alt="Insight logo"/></div>
                Start Time:
                <input type="date" name="m_startTime" value={this.state.m_startTime}  onChange={this.handleChange.bind(this) } /><br/><br/>                
                Duration:
                <input type="number" name="m_duration" value={this.state.m_duration} onChange={this.handleChange.bind(this)}/><br/><br/>
                Type:
                Raw<input type="radio" name="m_type" id="raw" value="raw" onChange={this.handleChange.bind(this)}/>
                Processed<input type="radio" name="m_type" id="processed" value="processed" onChange={this.handleChange.bind(this)}/><br/><br/>
                Quality:
                Low<input type="radio" name="m_quality" id="low" value="low" onChange={this.handleChange.bind(this)}/>
                High<input type="radio" name="m_quality" id="high" value="high" onChange={this.handleChange.bind(this)}/><br/><br/>
                {/*
                <select  id="qualitySelection" name="m_quality">
                  <option value="high">high</option>                  
                  <option value="low">low</option>
                </select>*/}
                <br/><br/>
              <input id="SendRequest" type="submit" className="semi-square" value="Send Request"/>
              </div>
          </div>
        </div>
      </fieldset>
    </form>
    );
  }
}
export default ApplicationInterfaceSendRequest;
