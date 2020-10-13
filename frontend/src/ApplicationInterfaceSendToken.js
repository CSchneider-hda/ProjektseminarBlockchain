import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import logo from './AppLogo.svg';
import './css/frontendDesign.css';
import {AppMachineContract} from "./setup";
import {TokenContract} from "./setup";
import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
class ApplicationInterfaceSendToken extends Component {
  
  applicationBalance = web3.eth.getBalance(AppMachineContract.getAppAddress());
  requiredToken = AppMachineContract.getRequiredToken();

  sendToken(event){
    //Hier wurde die Adresse für unsere Umgebung geändert
    AppMachineContract.sendToken({from:AppMachineContract.getAppAddress(),gas:3000000,value:AppMachineContract.getRequiredToken()});
    //Gibt den Token an den Contract AppMachineContract und führt die getPublicData function dabei aus ("0xf31604c7" ist der bytecode für den Funktion Call)
    TokenContract.transferAndCall(AppMachineContract.getContractAddress(), 1, "0xf31604c7", {from:AppMachineContract.getAppAddress()});

  }

  render() {
    return (
      <fieldset className ="fieldset centered" >
        <div className ="login-wrap">
          <div className ="login-html">
            <div className ="centered ">
              <div  ><img src={logo} className="logoApplication" alt="Insight logo"/></div>
              <div className="normalText">
              Available Token: <br />{web3.toDecimal(this.applicationBalance)}Wei<br />
              Token Required:<br />{AppMachineContract.getRequiredToken().toNumber()}Wei<br /><br /><br />
              {
                <button type="button" className =" coolButton semi-square"  onClick={this.sendToken}>Transfer Token</button>
              }
              
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      
    );
  }
}
export default ApplicationInterfaceSendToken;
