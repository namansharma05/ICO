const {ethers} = require("hardhat");
require("dotenv").config({path:".env"});
const {CRYPTODEVS_NFT_CONTRACT_ADDRESS} = require("../constants");
async function main(){
  const cryptoDevsTokenContract = await ethers.getContractFactory("CryptoDevToken");

  const deployCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(CRYPTODEVS_NFT_CONTRACT_ADDRESS);

  console.log("Crypto Dev Contract Address : ",deployCryptoDevsTokenContract.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(()=>process.exit(0)).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
