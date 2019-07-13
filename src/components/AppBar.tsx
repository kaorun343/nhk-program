// Libraries
import React, { FC } from 'react'
import MaterialAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

export type Props = {
  reload(): void
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
})

export const AppBar: FC<Props> = ({ reload }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MaterialAppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            NHK 番組表
          </Typography>
          <Button color="inherit" onClick={reload}>
            再読み込み
          </Button>
        </Toolbar>
      </MaterialAppBar>
    </div>
  )
}
