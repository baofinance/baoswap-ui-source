import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.bg1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.08),
    0px 24px 32px rgba(0, 0, 0, 0.02);
  border-radius: 30px;
  border-style: solid;
  border-color: ${({ theme }) => theme.bg2};
  padding: 1rem;
  width: 100%;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    height: 100%;
    padding-bottom: 30vh;
  `};
  ${({ theme }) => theme.mediaMinWidth.downToExtraSmall`
    max-width: 420px;
  `};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
