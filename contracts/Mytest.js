const { expect } = require(chai);
const { ethers } = require(hardhat);

describe(MyNFT, function () {
  it(Should deploy the contract, async function () {
    const MyNFT = await ethers.getContractFactory(MyNFT);
    const myNFT = await MyNFT.deploy();
    await myNFT.deployed();
    expect(myNFT.address).to.properAddress;
  });
});