import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import logo from './AppMachineLogo.svg';
import './css/frontendDesign.css';
import {AppMachineContract} from "./setup";
import {TokenContract} from "./setup";


class MachineInterfacePaymentRequest extends Component {
  
    m_startTime='';
    m_duration='';
    m_type='';
    m_quality='';
    

  sendPaymentRequest(event){
    //Hier wurde die Adresse für unsere Umgebung geändert
    AppMachineContract.requestToken({ from:AppMachineContract.getMachineAddress(),gas:3000000});
    //Sende Token an den Kunden, damit die Maschine besetzt ist
    TokenContract.transfer(AppMachineContract.getAppAddress(), 1, {from:AppMachineContract.getMachineAddress()});
  }
  render() {
    return (
      <fieldset className ="fieldset centered" >
        <div className ="login-wrap">
          <div className ="login-html">
            <div className ="centered ">
              <div  ><img src={logo} className="logoMachine" alt="Insight logo"/></div>
              <div className="normalText">
              Start Time:<Moment unix>{AppMachineContract.getStartTime().toNumber()}</Moment><br />
              Duration:{AppMachineContract.getDuration().toNumber()} days<br />
              Type:{AppMachineContract.getType().toNumber()==1?'Raw':'Processed'}<br />
              Quality:{AppMachineContract.getQuality().toNumber()==1?'low':'high'}<br />
              Payment Status:<b>{AppMachineContract.tokenTransferred.call()==true?'Done':'Not Paid'}</b><br /><br />
              <button type="button" className =" coolButton semi-square"  onClick={this.sendPaymentRequest}>Request Payment</button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}
export default MachineInterfacePaymentRequest;
