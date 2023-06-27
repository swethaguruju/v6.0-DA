/*import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'solidity-coverage';

require('dotenv').config();

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

 
const config: HardhatUserConfig = {

  solidity: "0.8.18",
  paths:{
    artifacts:'./frontend/src/artifacts',
  },
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Cka2Kf66FCy5PLmxotnisFvDz_hAPKvj',
      // @ts-ignore
     accounts: ["55be7e4f9f8c4eaebed223a69010c4f514e470d38c5f708e2cb88d08ef59442b"]
    }
  }

};



export default config; */

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'solidity-coverage';

import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";
require("@nomicfoundation/hardhat-toolbox");

import "solidity-coverage";


const config: HardhatUserConfig = {
  solidity: "0.8.17",
};

export default config;
const INFURA_API_KEY = "2RG339bAIRgMizOvt8QFsVAlGcP";

const SEPOLIA_PRIVATE_KEY = "55be7e4f9f8c4eaebed223a69010c4f514e470d38c5f708e2cb88d08ef59442b";

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://eth-mainnet.g.alchemy.com/v2/-IA0agwoeJEvdsZTUaq1x-x0pXG6EiDa`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};

