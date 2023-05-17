//https://eth-goerli.g.alchemy.com/v2/mgFnJMlm0hBGDcIcsm1LlsXCxOVt8tPn

//plugin to build smart contract tests
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url:'https://eth-goerli.g.alchemy.com/v2/mgFnJMlm0hBGDcIcsm1LlsXCxOVt8tPn',
     //private key from metammask
      accounts: [' 0xc66c663106b57318De896109eC717B678Cf56D91 ']

    }
  }
}