const hre = require("hardhat");

async function main() {

  const [deployer] = await hre.ethers.getSigners();

    //Token1
    console.log("Deploying contracts with the account:", deployer.address);

    const Token1 = await hre.ethers.getContractFactory("Token1");
  
    const token1 = await Token1.deploy();
  
    await token1.deployed();
    console.log("Token1 contracts:", token1.address);

  //Token2
  console.log("Deploying contracts with the account:", deployer.address);

  const Token2 = await hre.ethers.getContractFactory("Token2");

  const token2 = await Token2.deploy();

  await token2.deployed();
  console.log("Token2 contracts:", token2.address);


  //Pair
  console.log("Deploying contracts with the account:", deployer.address);

  const Pair = await hre.ethers.getContractFactory("Pair");

  const pair = await Pair.deploy();

  await pair.deployed();
  console.log("Pair contracts:", pair.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });