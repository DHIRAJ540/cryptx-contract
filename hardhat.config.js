require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "Lqos_jaY2Bq-K6G6maWryDmxGOs5OAWx";
const GOERLI_PRIVATE_KEY =
  "2d202d9f8bb373007c95d55bdbd66508eb7dd0760b78c3c0e5d11c2d005fe80d";

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};
