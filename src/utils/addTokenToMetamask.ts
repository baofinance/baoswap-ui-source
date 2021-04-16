import { Token } from 'uniswap-xdai-sdk'

export async function addTokenToMetamask(ethereum: any, token: Token) {
  const IMAGE_URL = '/images/bao.png'
  try {
    await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: token.address,
          symbol: token.symbol ? token.symbol : '',
          decimals: token.decimals,
          image: IMAGE_URL
        }
      }
    })
  } catch (error) {
    console.log(error)
  }
}
