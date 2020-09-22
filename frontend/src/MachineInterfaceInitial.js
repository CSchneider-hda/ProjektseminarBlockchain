import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import logo from './AppMachineLogo.svg';
import './css/frontendDesign.css';
import {AppMachineContract} from "./setup";


class MachineInterface extends Component {
  
    m_startTime='';
    m_duration='';
    m_type='';
    m_quality='';
    

  downloadTxtFile = () => {
    this.m_startTime = new Date(AppMachineContract.getStartTime().toNumber()*1000);
    this.m_duration = AppMachineContract.getDuration().toNumber();
    this.m_type = AppMachineContract.getType().toNumber();
    this.m_quality = AppMachineContract.getQuality().toNumber();
    this.m_appAddress =AppMachineContract.getAppAddress();
    const element = document.createElement("a");
    const file = new Blob([this.m_appAddress+'\t'+
                          this.m_startTime+'\t'+
                          this.m_duration+'\t'+
                          this.m_type+'\t'+
                          this.m_quality+'\n'
                          ], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  render() {
    return (
      <fieldset className ="fieldset centered" >
        <div className ="login-wrap">
          <div className ="login-html">
            <div className ="centered ">
              <div  ><img src={logo} className="logoMachine" alt="Insight logo"/></div>
              <div className="normalText">
                <b>Request Not sent yet</b>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}
export default MachineInterface;
