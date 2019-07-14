// Libraries
import React, { FC } from 'react'
import { createMuiTheme, Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

// Mine
import { AppBar } from '../components/AppBar'

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
})

type Props = {
  onReload(): void
}

export const DefaultLayout: FC<Props> = ({ children, onReload }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar reload={onReload} />
        <Container>{children}</Container>
      </ThemeProvider>
    </div>
  )
}
