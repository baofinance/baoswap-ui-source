# Baoswap Interface

[![Tests](https://github.com/Uniswap/uniswap-interface/workflows/Tests/badge.svg)](https://github.com/Uniswap/uniswap-interface/actions?query=workflow%3ATests)
[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

An open source interface for Baoswap -- a protocol for decentralized exchange of Bao tokens.

- Interface: [baoswap.xyz](https://baoswap.xyz/)
- Docs: [docs.bao.finance](https://docs.bao.finance/)
- Twitter: [@thebaoman](https://twitter.com/thebaoman)
- Discord: [Bao Finance Discord](https://discord.gg/BW3P62vJXT)

## Accessing the Baoswap Interface

To access the Baoswap Interface, use an IPFS gateway link from the
[latest release](https://github.com/1Hive/uniswap-interface/releases/latest),
or visit [baoswap.xyz](https://baoswap.xyz).

## Listing a token

Bao uses token lists, which are community managed lists.

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"`

Note that the interface only works on testnets where both
[Uniswap V2](https://uniswap.org/docs/v2/smart-contracts/factory/) and
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `main` branch.**
CI checks will run against all PRs.
