//Example only
const ethers = require('ethers')
const { Wallet, utils } = ethers // Destructure Wallet and Utils so you dont have to type ether.Wallet an ethers.utils
require('dotenv').config()

const PUBLIC_KEY_1 = process.env.PUBLIC_KEY_1

// Creates fake wallet to test transactions
// Wallet is part of signer documentation, but signer is not wallet
const wallet = Wallet.createRandom()

// console.log(wallet)
// console.log(wallet.address)
// console.log(wallet.publicKey)
// console.log(wallet.privateKey)

// promise will return after a user has signed a transactions and it will solve to signature
const promise = wallet.signTransaction({
	value: utils.parseEther('1.0'),
	// value: utils.parseUnits('5.0', "ether"),
	to: PUBLIC_KEY_1,
	gasLimit: 21000,
	// gasPrice: 10 ** 10,
	gasPrice: utils.parseUnits('10', 'gwei'), // using ethers js we have made this more human readable in there terminal
})

promise.then(console.log)
