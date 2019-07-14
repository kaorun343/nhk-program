// Libraries
import React, { FC } from 'react'
import {
  createMuiTheme,
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

// Mine
import { AppBar } from '../components/AppBar'

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
})

const useStyle = makeStyles({
  container: {
    paddingTop: '1rem',
  },
})

type Props = {
  title: string
  onReload?(): void
}

export const DefaultLayout: FC<Props> = ({ title, onReload, children }) => {
  const classes = useStyle()

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar reload={onReload} />
        <Container className={classes.container}>
          <Typography variant="h4" component="h1">
            {title}
          </Typography>
          {children}
        </Container>
      </ThemeProvider>
    </div>
  )
}
