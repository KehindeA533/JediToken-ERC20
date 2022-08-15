const { run } = require('hardhat')

async function verify(contractAddress, args) {
  console.log('verifying contract...')
  try {
    await run('verify:verify', {
      contract: 'contracts/JediToken.sol:JediToken',
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes('already verified')) {
      console.log('Already Verified')
    } else {
      console.log(e)
    }
  }
}

module.exports = { verify }
