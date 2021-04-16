import React, { useContext, useState } from 'react'
import { ChevronUp, ChevronDown, PieChart } from 'react-feather'
import { ThemeContext } from 'styled-components'
import { useActiveWeb3React } from '../../hooks'
import { getEtherscanLink } from '../../utils'
import { AutoColumn } from '../Column'
import { HoverCard, FixedHeightRow } from '../PositionCard'
import { RowFixed, AutoRow } from '../Row'
import { Text } from 'rebass'
import { ExternalLink, StyledInternalLink } from '../../theme'
import { PoolInfoFarmablePool } from '../../data/Reserves'
import Logo from '../Logo'
import { Fraction, Percent } from 'uniswap-xdai-sdk'

interface FarmAnalyticsCardProps {
  farmablePool: PoolInfoFarmablePool
  apy?: Fraction | undefined
  border?: string
  defaultShowMore: boolean
}

export function FarmAnalyticsCard({ farmablePool, apy, border, defaultShowMore }: FarmAnalyticsCardProps) {
  const theme = useContext(ThemeContext)
  const { chainId } = useActiveWeb3React()

  const { accBaoPerShare, stakedAmount, totalSupply, icon, name, poolWeight } = farmablePool

  const [showMore, setShowMore] = useState(defaultShowMore)

  return (
    <HoverCard border={border} style={{ backgroundColor: theme.bg2 }}>
      <AutoColumn gap="12px">
        <FixedHeightRow onClick={() => setShowMore(!showMore)} style={{ cursor: 'pointer' }}>
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
            {apy?.greaterThan('0') && (
              <StyledInternalLink to="/analytics">
                {apy.toFixed(0, {})}% <span style={{ flexShrink: 1, fontSize: '7pt' }}> APY</span>
              </StyledInternalLink>
            )}
            {showMore ? (
              <ChevronUp size="20" style={{ marginLeft: '10px' }} />
            ) : (
              <ChevronDown size="20" style={{ marginLeft: '10px' }} />
            )}
          </RowFixed>
        </FixedHeightRow>
        {showMore && (
          <AutoColumn gap="8px">
            <FixedHeightRow>
              <RowFixed>
                <PieChart style={{ marginRight: 10 }} />
                <Text fontSize={16} fontWeight={500}>
                  Weight
                </Text>
              </RowFixed>
              <RowFixed>
                <Text fontSize={16} fontWeight={500}>
                  {poolWeight?.toString() ?? '-'}
                </Text>
              </RowFixed>
            </FixedHeightRow>
            <FixedHeightRow>
              <RowFixed>
                <Text fontSize={16} fontWeight={500}>
                  All (LP):
                </Text>
              </RowFixed>
              <RowFixed>
                <Text fontSize={16} fontWeight={500}>
                  {totalSupply ? totalSupply.toSignificant(8) : '-'}
                </Text>
              </RowFixed>
            </FixedHeightRow>
            <FixedHeightRow>
              <RowFixed>
                <Text fontSize={16} fontWeight={500}>
                  Staked / (% Total):
                </Text>
              </RowFixed>
              <RowFixed>
                <Text fontSize={16} fontWeight={500}>
                  {stakedAmount &&
                    totalSupply &&
                    `${stakedAmount.toSignificant(8)} (${new Percent(stakedAmount.raw, totalSupply.raw).toFixed(2)}%)`}
                </Text>
              </RowFixed>
            </FixedHeightRow>

            <FixedHeightRow>
              <RowFixed>
                <Text fontSize={16} fontWeight={500}>
                  Acc. Bao/Share:
                </Text>
              </RowFixed>
              <RowFixed>
                <Text fontSize={16} fontWeight={500}>
                  {accBaoPerShare ? accBaoPerShare.toSignificant(8) : '-'}
                </Text>
              </RowFixed>
            </FixedHeightRow>

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
