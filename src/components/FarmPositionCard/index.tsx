import React, { useContext, useState, useCallback } from 'react'
import { ChevronUp, ChevronDown, Loader } from 'react-feather'
import styled, { ThemeContext } from 'styled-components'
import { TokenAmount, JSBI, Percent, Fraction } from 'uniswap-xdai-sdk'
import { UserInfoFarmablePool } from '../../data/Reserves'
import { useStakedAmount } from '../../data/Staked'
import { useActiveWeb3React } from '../../hooks'
import { useStake, useUnstake, useHarvestAll } from '../../hooks/Farm'
import { getEtherscanLink } from '../../utils'
import { unwrappedToken } from '../../utils/wrappedCurrency'
import { ButtonSecondary, ButtonPrimary } from '../Button'
import { AutoColumn } from '../Column'
import { HoverCard, FixedHeightRow, BalanceText } from '../PositionCard'
import { RowFixed, RowBetween, AutoRow } from '../Row'
import { Dots } from '../swap/styleds'
import { Text } from 'rebass'
import { Lock as LockIcon, Unlock as UnlockIcon } from 'react-feather'
import { ExternalLink, StyledInternalLink } from '../../theme'
import Logo from '../Logo'
import { useStakedTVL } from '../../hooks/TVL'
import { useTotalSupply } from '../../data/TotalSupply'
import { FarmState, initialFarmState } from '../../state/farm/reducer'

interface FarmCardProps {
  farmablePool: UserInfoFarmablePool
  unstakedLPAmount?: TokenAmount | undefined | null
  baoPriceUsd: Fraction | undefined | null
  apy?: Fraction | undefined
  allStakedTVL?: Fraction | undefined
  showUnwrapped?: boolean
  border?: string
  defaultShowMore: boolean
}

export function FarmPositionCard({
  farmablePool,
  unstakedLPAmount,
  baoPriceUsd,
  apy,
  allStakedTVL,
  border,
  defaultShowMore
}: FarmCardProps): JSX.Element {
  const theme = useContext(ThemeContext)
  const { chainId } = useActiveWeb3React()
  const { stakedAmount, pendingReward, icon, name } = farmablePool

  const rewardCurrency = unwrappedToken(pendingReward.token)

  const totalSupply = useTotalSupply(farmablePool.token)
  const allStakedAmount = useStakedAmount(farmablePool.token)

  const [showMore, setShowMore] = useState(defaultShowMore)

  const lpStakedPercentage =
    !!stakedAmount &&
    !!allStakedAmount &&
    stakedAmount.greaterThan('0') &&
    JSBI.greaterThanOrEqual(allStakedAmount.raw, stakedAmount.raw)
      ? new Percent(stakedAmount.raw, allStakedAmount.raw)
      : undefined

  const { callback: stakeCallback } = useStake(farmablePool, unstakedLPAmount)
  const handleStake = useCallback(() => {
    if (!stakeCallback) {
      return
    }
    stakeCallback()
  }, [stakeCallback])
  const { callback: unstakeCallback } = useUnstake(farmablePool, stakedAmount)
  const handleUnstake = useCallback(() => {
    if (!unstakeCallback) {
      return
    }
    unstakeCallback()
  }, [unstakeCallback])

  const [{ attemptingHarvest }, setFarmState] = useState<FarmState>(initialFarmState)

  const { callback: harvestCallback } = useHarvestAll([farmablePool])
  const handleHarvestAll = useCallback(() => {
    if (!harvestCallback) {
      return
    }
    setFarmState({ attemptingHarvest: true, harvestErrorMessage: undefined, harvestTxnHash: undefined })
    harvestCallback()
      .then(() => {
        setFarmState({ attemptingHarvest: false, harvestErrorMessage: undefined, harvestTxnHash: undefined })
      })
      .catch(error => {
        setFarmState({
          attemptingHarvest: false,
          harvestErrorMessage: error.message,
          harvestTxnHash: undefined
        })
      })
  }, [harvestCallback])

  const unlockedPending = pendingReward?.multiply(new Fraction('1', '20'))
  const lockedPending = pendingReward?.multiply(new Fraction('19', '20'))

  const IconWrapper = styled.div<{ pending: boolean; success?: boolean }>`
    color: ${({ pending, success, theme }) => (pending ? theme.primary1 : success ? theme.green1 : theme.red1)};
  `
  const yourStakeTVL = useStakedTVL(farmablePool, farmablePool.stakedAmount, totalSupply, baoPriceUsd)

  return (
    <HoverCard border={border} style={{ backgroundColor: theme.bg2 }}>
      <AutoColumn gap="12px">
        <FixedHeightRow onClick={() => setShowMore(!showMore)} style={{ cursor: 'pointer', height: 40 }}>
          <RowFixed>
            <Logo
              srcs={[`images/pool-logos/${icon}`]}
              alt={name}
              style={{ width: 40, height: 40, objectFit: 'contain', margin: 10, marginLeft: 0 }}
            />
            <AutoColumn>
              <RowFixed>
                <Text fontWeight={600} fontSize={18}>
                  {name}
                </Text>
              </RowFixed>
              <RowFixed>
                <Text fontWeight={300} fontSize={12}>
                  {farmablePool.symbol}
                </Text>
              </RowFixed>
            </AutoColumn>
          </RowFixed>
          <RowFixed>
            <AutoColumn
              gap="0.2rem"
              justify="end"
              style={{ minWidth: '5rem', alignContent: 'baseline', textAlign: 'end', paddingRight: '0.5rem' }}
            >
              {apy?.greaterThan('0') && (
                <StyledInternalLink to="/analytics">
                  {apy.toFixed(0, {})}% <span style={{ flexShrink: 1, fontSize: '7pt' }}> APY</span>
                </StyledInternalLink>
              )}
              {yourStakeTVL && (
                <AutoColumn justify="end">
                  <Text fontSize="8pt">Your Stake</Text>
                  <BalanceText>{`$${yourStakeTVL.toFixed(2, {})}`}</BalanceText>
                </AutoColumn>
              )}
            </AutoColumn>
            {showMore ? (
              <ChevronUp size="20" style={{ marginLeft: '2px' }} />
            ) : (
              <ChevronDown size="20" style={{ marginLeft: '2px' }} />
            )}
          </RowFixed>
        </FixedHeightRow>
        {showMore && (
          <AutoColumn gap="8px">
            <FixedHeightRow style={{ marginTop: '0.5rem' }}>
              <RowFixed>
                <Text fontSize={16} fontWeight={500}>
                  All Staked TVL (LP):
                </Text>
              </RowFixed>
              <RowFixed>
                <Text fontSize={16} fontWeight={500}>
                  {allStakedTVL ? `$${allStakedTVL.toFixed(2, {})}` : '-'}
                </Text>
              </RowFixed>
            </FixedHeightRow>

            <FixedHeightRow>
              <RowFixed>
                <Text fontSize={16} fontWeight={500}>
                  Your Stake (LP):
                </Text>
              </RowFixed>
              <RowFixed>
                <Text fontSize={16} fontWeight={500}>
                  {stakedAmount ? stakedAmount.toFixed(3, {}) : '-'}
                </Text>
              </RowFixed>
            </FixedHeightRow>

            <FixedHeightRow>
              <RowFixed>
                <Text fontSize={16} fontWeight={500}>
                  All Staked (LP):
                </Text>
              </RowFixed>
              <RowFixed>
                <Text fontSize={16} fontWeight={500}>
                  {allStakedAmount ? allStakedAmount.toFixed(3, {}) : '-'}
                </Text>
              </RowFixed>
            </FixedHeightRow>

            <FixedHeightRow>
              <Text fontSize={16} fontWeight={500}>
                Your Stake / All Stake:
              </Text>
              <Text fontSize={16} fontWeight={500}>
                {lpStakedPercentage ? lpStakedPercentage.toFixed(4, {}) + '%' : '-'}
              </Text>
            </FixedHeightRow>

            <RowBetween paddingTop="0.5rem" paddingBottom="0.5rem">
              <AutoColumn style={{ alignContent: 'end', marginRight: 20 }}>
                {unstakedLPAmount && unstakedLPAmount.greaterThan('0') ? (
                  <RowBetween>
                    <ButtonSecondary
                      onClick={() => handleStake()}
                      padding="0.5rem"
                      style={{
                        fontWeight: 900,
                        backgroundColor: theme.primary3,
                        padding: '0.25rem',
                        marginBottom: 10,
                        width: '7rem'
                      }}
                    >
                      +Stake All
                    </ButtonSecondary>
                  </RowBetween>
                ) : (
                  ''
                )}
                <RowBetween>
                  <ButtonSecondary
                    onClick={() => handleUnstake()}
                    style={{
                      fontWeight: 700,
                      backgroundColor: theme.red2,
                      padding: '0.25rem',
                      width: '7rem'
                    }}
                  >
                    -Unstake All
                  </ButtonSecondary>
                </RowBetween>
              </AutoColumn>
              <AutoColumn>
                <ButtonPrimary padding="0.5rem" onClick={() => handleHarvestAll()} disabled={attemptingHarvest}>
                  {attemptingHarvest ? (
                    <span>
                      <Dots>Harvesting</Dots>
                      <IconWrapper pending={attemptingHarvest} success={!attemptingHarvest}>
                        <Loader />
                      </IconWrapper>
                    </span>
                  ) : (
                    <span>
                      <Text color={theme.text5} fontWeight={600}>
                        Harvest
                      </Text>
                      <BalanceText style={{ flexShrink: 0, textAlign: 'end' }} pr="0.5rem" fontWeight={800}>
                        &nbsp;&nbsp;
                        <UnlockIcon size="14px" /> {unlockedPending?.toFixed(0) || '-'}{' '}
                        <span style={{ flexShrink: 1, fontSize: '8pt' }}>{rewardCurrency.symbol}</span>
                        <br />
                        + <LockIcon size="14px" /> {lockedPending?.toFixed(0) || '-'}{' '}
                        <span style={{ flexShrink: 1, fontSize: '8pt' }}>{rewardCurrency.symbol}</span>
                      </BalanceText>
                    </span>
                  )}
                </ButtonPrimary>
              </AutoColumn>
            </RowBetween>

            <AutoRow justify="center" marginTop={'10px'}>
              {chainId && (
                <ExternalLink href={getEtherscanLink(chainId, farmablePool.address, 'address')}>
                  View Liquidity Pool Contract ↗
                </ExternalLink>
              )}
            </AutoRow>
          </AutoColumn>
        )}
      </AutoColumn>
    </HoverCard>
  )
}
