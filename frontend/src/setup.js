import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));



let AppMachineABI=[{"inputs":[{"internalType":"address payable","name":"machAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"FunctionCalled","type":"event","signature":"0x618191079b759c0e8f74514441817b7d0c6dee793d7edc2ac0fbff12ca88f893"},{"constant":true,"inputs":[],"name":"myRequest","outputs":[{"internalType":"uint256","name":"StartTime","type":"uint256"},{"internalType":"uint256","name":"Duration","type":"uint256"},{"internalType":"uint256","name":"Quality","type":"uint256"},{"internalType":"uint256","name":"Type","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xcfbe2927"},{"constant":true,"inputs":[],"name":"publicData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9a76717a"},{"constant":true,"inputs":[],"name":"requestAcknowledged","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x57642743"},{"constant":true,"inputs":[],"name":"requestSent","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8dd24721"},{"constant":true,"inputs":[],"name":"requiredToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8a204ed6"},{"constant":true,"inputs":[],"name":"tokenTransferred","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc5822c0d"},{"constant":false,"inputs":[{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"quality","type":"uint256"},{"internalType":"uint256","name":"infType","type":"uint256"}],"name":"sendRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x6a0c66c8"},{"constant":false,"inputs":[],"name":"requestToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x4d7ec628"},{"constant":false,"inputs":[],"name":"sendToken","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0xb8972db5"},{"constant":false,"inputs":[],"name":"encoder","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x06df1416"},{"constant":false,"inputs":[],"name":"setData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf31604c7"},{"constant":true,"inputs":[],"name":"getMachineAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xb11277c0"},{"constant":true,"inputs":[],"name":"getContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x32a2c5d0"},{"constant":true,"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc828371e"},{"constant":true,"inputs":[],"name":"getDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xad2e8c9b"},{"constant":true,"inputs":[],"name":"getQuality","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9bf2324a"},{"constant":true,"inputs":[],"name":"getType","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x15dae03e"},{"constant":true,"inputs":[],"name":"getAppAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x63f6a6da"},{"constant":true,"inputs":[],"name":"getRequiredToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9c06c4dc"},{"constant":true,"inputs":[],"name":"getTokenTrasnferredStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xa1ad5666"},{"constant":true,"inputs":[],"name":"getRequestSentStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xda464ed7"},{"constant":true,"inputs":[],"name":"getRequestAcknowledgeStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x33a54ac6"},{"constant":true,"inputs":[],"name":"getPublicData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xbf7ce742"}];
//Addresse des Maschinencontracts hier geändert
let AppMachineAddress='0xfEdC7803a40c39ae4bfef1430677B5f3B6cFDca7';

const AppMachineContract=web3.eth.contract(AppMachineABI).at(AppMachineAddress);
export {AppMachineContract};

let TokenABI=[{"inputs":[{"internalType":"uint256","name":"_total","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":false,"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":false,"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdd62ed3e"},{"constant":false,"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xcae9ca51"},{"constant":false,"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x4000aea0"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"transferFromAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc1d34b89"}];
let TokenAddress='0xf97a99cF9b3f8307E9B50aC22aa41a54e052d118';

const TokenContract=web3.eth.contract(TokenABI).at(TokenAddress);
export {TokenContract};

//let AppMachineABI=[{"constant":true,"inputs":[],"name":"requestAcknowledged","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x57642743"},{"constant":true,"inputs":[],"name":"requiredToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8a204ed6"},{"constant":true,"inputs":[],"name":"requestSent","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8dd24721"},{"constant":true,"inputs":[],"name":"tokenTransferred","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc5822c0d"},{"constant":true,"inputs":[],"name":"myRequest","outputs":[{"name":"StartTime","type":"uint256"},{"name":"Duration","type":"uint256"},{"name":"Quality","type":"uint256"},{"name":"Type","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xcfbe2927"},{"inputs":[{"name":"machAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"constant":false,"inputs":[{"name":"startTime","type":"uint256"},{"name":"duration","type":"uint256"},{"name":"quality","type":"uint256"},{"name":"infType","type":"uint256"}],"name":"sendRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x6a0c66c8"},{"constant":false,"inputs":[],"name":"requestToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x4d7ec628"},{"constant":false,"inputs":[],"name":"sendToken","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0xb8972db5"},{"constant":true,"inputs":[],"name":"getStartTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc828371e"},{"constant":true,"inputs":[],"name":"getDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xad2e8c9b"},{"constant":true,"inputs":[],"name":"getQuality","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9bf2324a"},{"constant":true,"inputs":[],"name":"getType","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x15dae03e"},{"constant":true,"inputs":[],"name":"getAppAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x63f6a6da"},{"constant":true,"inputs":[],"name":"getRequiredToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9c06c4dc"},{"constant":true,"inputs":[],"name":"getTokenTrasnferredStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xa1ad5666"},{"constant":true,"inputs":[],"name":"getRequestSentStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xda464ed7"},{"constant":true,"inputs":[],"name":"getRequestAcknowledgeStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x33a54ac6"}];