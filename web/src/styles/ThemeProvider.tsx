import React, { ReactChildren, ReactChild } from 'react'
import { ThemeProvider as JssThemeProvider, JssProvider } from 'react-jss'

import theme from '../tokens'
import jss from './jssConfig'

export interface ThemeProviderProps {
  children: ReactChild | ReactChildren
  isStylesNotReset?: boolean
}

export const ThemeProvider = ({
  children,
  isStylesNotReset,
}: ThemeProviderProps): JSX.Element => (
  <JssProvider jss={jss(isStylesNotReset)}>
    <JssThemeProvider theme={theme}>{children}</JssThemeProvider>
  </JssProvider>
)

export default ThemeProvider
