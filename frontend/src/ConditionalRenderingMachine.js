import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import logo from './AppLogo.svg';
//import './css/frontendDesign.css';
import moment from 'moment';
import {AppMachineContract} from "./setup";
import { Redirect } from 'react-router-dom';
import MachineInterfaceInitial from './MachineInterfaceInitial';
import MachineInterfacePaymentRequest from './MachineInterfacePaymentReqest';
import MachineInterfacePaid from './MachineInterfacePaid';


class ConditionalRenderingMachine extends Component{
    
   render(){
       if(!AppMachineContract.getRequestSentStatus()){
           return(<MachineInterfaceInitial />);
       } else if(AppMachineContract.getRequestSentStatus() && !AppMachineContract.getRequestAcknowledgeStatus()){
           return(<MachineInterfacePaymentRequest />);
       } else{
           return(<MachineInterfacePaid />);
       }   
   }    
}
// function conditionalRendering() {
    
        
// }

export default ConditionalRenderingMachine;
  
    