// Libraries
import React, { FC, useCallback, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'

// Mine
import { Program } from '../models/Program'
import { nowOnAirApi } from '../infrastructures/api'
import { ProgramList } from '../components/ProgramList'
import { AppBar } from '../components/AppBar'

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
  const [present, setPresent] = React.useState([] as ReadonlyArray<Program>)

  const getPrograms = useCallback(() => {
    nowOnAirApi('010', 'tv').then(list => {
      const channelsKeys = ['g1', 'g2', 'e1', 'e3', 's1', 's3']
      const channels = channelsKeys.map(key => list[key])
      const present = channels.map(channel => channel.present)
      setPresent(present)
    })
  }, [present])

  useEffect(() => getPrograms(), [])

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
