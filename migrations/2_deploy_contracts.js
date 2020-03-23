const TestToken = artifacts.require("../contracts/TestToken.sol");

module.exports = function(deployer, network, accounts) {
  const name = "TestToken";
  const symbol = "TST";
  const decimals = 18;
  const initSupply = web3.utils.toBN(100*(10**decimals));

  return deployer.then(()=>{
    return deployer.deploy(
      TestToken,
      name,
      symbol,
      decimals,
      initSupply
    );
  });
}
