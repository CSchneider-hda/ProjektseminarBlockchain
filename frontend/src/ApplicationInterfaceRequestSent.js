import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import logo from './AppLogo.svg';
import './css/frontendDesign.css';
import {AppMachineContract} from "./setup";
import Web3 from 'web3';


class ApplicationInterfaceRequestSent extends Component {
      


  render() {
    return (
      <fieldset className ="fieldset centered" >
        <div className ="login-wrap">
          <div className ="login-html">
            <div className ="centered ">
              <div  ><img src={logo} className="logoApplication" alt="Insight logo"/></div>
              <div className="normalText">
                <b>Request Sent</b> <br />
                Start Time:<Moment unix>{AppMachineContract.getStartTime().toNumber()}</Moment><br />
                Duration:{AppMachineContract.getDuration().toNumber()} days<br />
                Type:{AppMachineContract.getType().toNumber()==1?'Raw':'Processed'}<br />
                Quality:{AppMachineContract.getQuality().toNumber()==1?'Low':'High'}<br />
                Status: <b>Not Acknowledged</b><br /><br />
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      
    );
  }
}
export default ApplicationInterfaceRequestSent;
