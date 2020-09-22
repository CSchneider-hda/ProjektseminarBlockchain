import React from 'react';
import ReactDOM from 'react-dom';
import MachineInterfacePaid from './MachineInterfacePaid';
import MachineInterfaceInitial from './MachineInterfaceInitial';
import ApplicationInterfaceSendRequest from './ApplicationInterfaceSendRequest';
import {AppMachineContract} from "./setup";
import ConditionalRenderingApp from './ConditionalRenderingApp';
import ConditionalRenderingMachine from './ConditionalRenderingMachine';
//import MachineInterfaceRealtime from './MachineInterfaceRealtime';
import ApplicationInterfaceSendToken from './ApplicationInterfaceSendToken';
import * as serviceWorker from './serviceWorker';
import AppRouter from './redirectingExample';
import App from './App';


ReactDOM.render(<ConditionalRenderingApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();