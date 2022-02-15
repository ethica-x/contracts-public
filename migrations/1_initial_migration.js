const Migrations = artifacts.require("MigrationsNFT");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
