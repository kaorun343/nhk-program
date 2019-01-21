// Libraries
import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'

export type Props = {
  reload(): void
}

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
})

export const AppBarComponent = withStyles(styles)(
  (props: Props & WithStyles<keyof typeof styles>) => (
    <div className={props.classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            className={props.classes.grow}
          >
            NHK 番組表
          </Typography>
          <Button color="inherit" onClick={props.reload}>
            再読み込み
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  ),
)
