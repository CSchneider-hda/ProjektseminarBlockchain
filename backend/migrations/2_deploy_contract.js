var AppMachine = artifacts.require("./AppMachine.sol");
var ERC827 = artifacts.require("./ERC827.sol");

module.exports = function(deployer) {
  deployer.deploy(AppMachine,"0x50DDBE00658a5CeF41f35db1bc56ac3EACAC502E", {gas: 3500000});
  //Nur ein Token wird erstellt. Dieser signalisiert, ob die Maschine gerade frei ist. Hat die Maschine keinen Token, ist sie besetzt.
  deployer.deploy(ERC827, 1, {gas: 3500000, from: "0x50DDBE00658a5CeF41f35db1bc56ac3EACAC502E"});
};
