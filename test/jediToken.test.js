const { assert } = require('chai')
const { getNamedAccounts, deployments, ethers } = require('hardhat')
const { INITIAL_SUPPLY } = require('../helper-hardhat-config')

describe('jediToken Uint Test', function () {
  let jediToken, deployer

  beforeEach(async function () {
    const accounts = await getNamedAccounts()
    deployer = accounts.deployer

    await deployments.fixture('all')
    jediToken = await ethers.getContract('JediToken', deployer)
  })

  it('was deployed', async () => {
    assert(jediToken.address)
  })
  describe('constructor', () => {
    it('Should have correct INITIAL_SUPPLY of token ', async () => {
      const totalSupply = await jediToken.totalSupply()
      assert.equal(totalSupply.toString(), INITIAL_SUPPLY)
    })
    it('initializes the token with the correct name and symbol ', async () => {
      const name = (await jediToken.name()).toString()
      assert.equal(name, 'Jedi')

      const symbol = (await jediToken.symbol()).toString()
      assert.equal(symbol, 'JED')
    })
  })
})
