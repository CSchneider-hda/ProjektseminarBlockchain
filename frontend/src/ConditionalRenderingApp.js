import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import logo from './AppLogo.svg';
//import './css/frontendDesign.css';
import moment from 'moment';
import {AppMachineContract} from "./setup";
import { Redirect } from 'react-router-dom';
import ApplicationInterfaceSendRequest from './ApplicationInterfaceSendRequest';
import ApplicationInterfaceRequestSent from './ApplicationInterfaceRequestSent';
import ApplicationInterfaceSendToken from './ApplicationInterfaceSendToken';
import ApplicationInterfaceTokenSent from './ApplicationInterfaceTokenSent';


class ConditionalRenderingApp extends Component{
    
   render(){
        if(!AppMachineContract.getRequestSentStatus()){
            return(<ApplicationInterfaceSendRequest />);
        }else if(AppMachineContract.getTokenTrasnferredStatus()){
            return(<ApplicationInterfaceTokenSent />);
        }else if(AppMachineContract.getRequestSentStatus() && AppMachineContract.getRequestAcknowledgeStatus()){
            return(<ApplicationInterfaceSendToken />);
        }else{
            return(<ApplicationInterfaceRequestSent />);
        }    
    }    
}


export default ConditionalRenderingApp;
  
    