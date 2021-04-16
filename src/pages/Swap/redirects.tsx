import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'

// Redirects to swap but only replace the pathname
export function RedirectPathToSwapOnly({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/swap' }} />
}

// Redirects from the /swap/:outputCurrency path to the /swap?outputCurrency=:outputCurrency format
export function RedirectToSwap(props: RouteComponentProps<{ inputCurrency?: string; outputCurrency?: string }>) {
  const {
    match: {
      params: { inputCurrency, outputCurrency }
    }
  } = props

  return (
    <Redirect
      to={{
        ...props,
        pathname: '/swap',
        search: `&inputCurrency=${inputCurrency}&outputCurrency=${outputCurrency}`
      }}
    />
  )
}
