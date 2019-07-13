// Libraries
import React, { FC } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'
import Container from '@material-ui/core/Container'

// Mine
import { NowOnAirList } from '../components/NowOnAirList'
import { AppBar } from '../components/AppBar'
import { useNowOnAir } from '../hooks/useNowOnAir'

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
})

export const NowOnAir: FC = () => {
  const [present, getPrograms] = useNowOnAir()

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar reload={getPrograms} />
        <Container>
          <NowOnAirList programs={present} />
        </Container>
      </ThemeProvider>
    </div>
  )
}
