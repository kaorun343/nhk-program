// Libraries
import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'

// Mine
import { ProgramList } from '../components/ProgramList'
import { AppBar } from '../components/AppBar'
import { useNowOnAir } from '../hooks/useNowOnAir'

const useStyles = makeStyles({
  programs: {
    padding: '1rem',
  },
})

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
})

export const App: FC = () => {
  const classes = useStyles()
  const [present, getPrograms] = useNowOnAir()

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar reload={getPrograms} />
        <div className={classes.programs}>
          <ProgramList programs={present} />
        </div>
      </ThemeProvider>
    </div>
  )
}
