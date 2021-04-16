import React, { Suspense, useEffect, useState } from 'react'
import { HashRouter, Link, Route, Switch } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import Header from '../components/Header'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import Analytics from './Analytics'
import Farm from './Farm'
import { ButtonPrimary } from '../components/Button'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
  height: 100%;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    margin: 0;
  `};
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 160px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
  margin-top: ${isMobile ? '20px' : ''};

  ${({ theme }) => theme.mediaMinWidth.downToExtraSmall`
    padding: 160px 16px;
  `};
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 16px 0 0;
  `};

  height: 100%;
  z-index: 1;
`

const Marginer = styled.div`
  ${({ theme }) => theme.mediaMinWidth.downToExtraSmall`
    margin-top: 5rem;
  `};
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    margin-top: 1rem;
  `};
`

export default function App() {
  const [isCatchAllReloadShown, setIsCatchAllReloadShown] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => setIsCatchAllReloadShown(true), 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Suspense fallback={null}>
      <HashRouter>
        <Route component={DarkModeQueryParamReader} />
        <AppWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            <Popups />
            <Web3ReactManager>
              <Switch>
                <Route exact strict path="/swap" component={Swap} />
                <Route exact strict path="/swap/:inputCurrency" component={RedirectToSwap} />
                <Route exact strict path="/swap/:inputCurrency/:outputCurrency" component={RedirectToSwap} />
                <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
                <Route exact strict path="/find" component={PoolFinder} />
                <Route exact strict path="/pool" component={Pool} />
                <Route exact strict path="/farm" component={Farm} />
                <Route exact strict path="/create" component={RedirectToAddLiquidity} />
                <Route exact strict path="/analytics" component={Analytics} />
                <Route exact path="/add" component={AddLiquidity} />
                <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
                <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                <Route component={RedirectPathToSwapOnly} />
              </Switch>
            </Web3ReactManager>
            {isCatchAllReloadShown && (
              <ButtonPrimary
                as={Link}
                to="/"
                onClick={() => window.location.reload(false)}
                style={{ transition: 'fadein 2s', maxWidth: 320, zIndex: -1, position: 'absolute' }}
              >
                Reload
              </ButtonPrimary>
            )}
            <Marginer />
          </BodyWrapper>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}
