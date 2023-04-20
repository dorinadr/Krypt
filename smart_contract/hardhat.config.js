//https://eth-goerli.g.alchemy.com/v2/mgFnJMlm0hBGDcIcsm1LlsXCxOVt8tPn

//plugin to build smart contract tests
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url:'https://eth-goerli.g.alchemy.com/v2/mgFnJMlm0hBGDcIcsm1LlsXCxOVt8tPn',
     //private key from metammask
      accounts: ['989229cb922eae8f1c682f4ed6c7479848379424d32fedce292237b6692ad84d']

    }
  }
}