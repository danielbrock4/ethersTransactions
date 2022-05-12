const axios = require('axios')
require('dotenv').config()

// if you set up the .env file correctly, your private key and alchemy endpoint will be accessed automatically using `process.env`
const ALCHEMY_RINKEBY_URL = process.env.ALCHEMY_RINKEBY_URL
const PUBLIC_KEY = process.argv[2]

axios
	.post(ALCHEMY_RINKEBY_URL, {
		jsonrpc: '2.0',
		id: 1,
		method: 'eth_getTransactionCount',
		params: [PUBLIC_KEY, 'latest'],
	})
	.then((response) => {
		console.log(`Nonce Eth Hexadecimal ${response.data.result}`)
		console.log(`Nonce ${parseInt(response.data.result, 16)}`) // Convert to non hexadecimal
	})
