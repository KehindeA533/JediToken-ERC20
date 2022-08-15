// const { getNamedAccounts, deployments, network } = require('hardhat')
const { network } = require('hardhat')
const { verify } = require('../utils/verify')
const { INITIAL_SUPPLY } = require('../helper-hardhat-config')

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId

  const jediToken = await deploy('JediToken', {
    from: deployer,
    args: [INITIAL_SUPPLY],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  })
  log(`ourToken deployed at ${jediToken.address}`)

  // Verify the deployment
  if (chainId != 31337 && process.env.ETHERSCAN_API_KEY) {
    await verify(jediToken.address, [INITIAL_SUPPLY])
  }

  log('-----------------------------------------')
}

module.exports.tags = ['all', 'jediToken']
