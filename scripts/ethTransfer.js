// EXAMPLE DOES NOT WORK. NEEDS REAL PRIVATE KEy
require('dotenv').config()
const {
	Wallet,
	utils,
	providers: { JsonRpcProvider },
} = require('ethers')

// connect o a JSON RPC endpoint
const provider = new JsonRpcProvider('http://localhost:8000')

// create a new wallet with a simple private key
const privateKey = '0x' + '9'.repeat(64)
// console.log(privateKey)
// console.log(privateKey.length)

// Because the wallet is connected to provider we dont need to need to include the nonce or other features
const wallet = new Wallet(privateKey, provider)
console.log(wallet)

wallet.getBalance().then(console.log)
wallet.getBalance().then((balance) => utils.formatEther(balance))

wallet
	.sendTransaction({
		to: 'danielnolan.eth',
		value: utils.parseEther('1.0'),
	})
	.then(console.log)
