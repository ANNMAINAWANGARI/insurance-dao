import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "viem";

const WalletFactoryModule = buildModule("WalletFactoryModule", (m) => {
 
  const walletFactory = m.contract("WalletFactory");

  return { walletFactory };
});

export default WalletFactoryModule;
