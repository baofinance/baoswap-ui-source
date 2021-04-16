import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import 'inter-ui'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ChainId } from 'uniswap-xdai-sdk'
import { getNetworkLibrary } from './connectors'
import { ForeignNetworkContextName, NetworkContextName } from './constants'
import { useForeignWeb3React } from './hooks'
import './i18n'
import App from './pages/App'
import store from './state'
import ApplicationUpdater from './state/application/updater'
import ListsUpdater from './state/lists/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'
import UserUpdater from './state/user/updater'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from './theme'
import getLibrary from './utils/getLibrary'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)
const Web3ProviderForeignNetwork = createWeb3ReactRoot(ForeignNetworkContextName)

if ('ethereum' in window) {
  ;(window.ethereum as any).autoRefreshOnNetworkChange = false
}

function Updaters() {
  const foreignWeb3React = useForeignWeb3React()
  const activeAppUpdater = ApplicationUpdater()
  const activeTxnUpdater = TransactionUpdater()
  const foreignAppUpdater = ApplicationUpdater(foreignWeb3React)
  const foreignTxnUpdater = TransactionUpdater(foreignWeb3React)
  return (
    <>
      <ListsUpdater />
      <UserUpdater />
      {activeAppUpdater}
      {foreignAppUpdater}
      {activeTxnUpdater}
      {foreignTxnUpdater}
      <MulticallUpdater chainId={ChainId.XDAI} />
      <MulticallUpdater chainId={ChainId.MAINNET} />
    </>
  )
}

ReactDOM.render(
  <StrictMode>
    <FixedGlobalStyle />
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Web3ProviderForeignNetwork getLibrary={getNetworkLibrary}>
          <Provider store={store}>
            <Updaters />
            <ThemeProvider>
              <ThemedGlobalStyle />
              <App />
            </ThemeProvider>
          </Provider>
        </Web3ProviderForeignNetwork>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById('root')
)
