const PriceFeed = artifacts.require('PriceFeedNFT')
const Presale = artifacts.require('PresaleNFT')

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(PriceFeed)
  await deployer.deploy(Presale, accounts[1], accounts[7], PriceFeed.address)
}
