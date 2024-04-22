import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    etherlinkTest: {
      url: "https://node.ghostnet.etherlink.com",
      accounts: [`${process.env.MY_PRIVATE_KEY}`],
    }
  }
};

export default config;
