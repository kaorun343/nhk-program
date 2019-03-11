// Libraries
import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'

// Mine
import { Program } from '../models/Program'
import { nowOnAirApi } from '../infrastructure/api'
import { ProgramsComponent } from '../components/Programs'
import { AppBarComponent } from '../components/AppBar'

const styles = createStyles({
  programs: {
    padding: '1rem',
  },
})

type State = {
  present: Program[]
}

export const App = withStyles(styles)(
  class extends React.Component<WithStyles<keyof typeof styles>, State> {
    state: State = {
      present: [],
    }

    getPrograms() {
      nowOnAirApi('010', 'tv').then(list => {
        const channelsKeys = ['g1', 'g2', 'e1', 'e3', 's1', 's3']
        const channels = channelsKeys.map(key => list[key])
        const present = channels.map(channel => channel.present)
        this.setState({ present })
      })
    }

    onReload = () => {
      this.getPrograms()
    }

    componentDidMount() {
      this.getPrograms()
    }

    render() {
      return (
        <div>
          <AppBarComponent reload={this.onReload} />
          <div className={this.props.classes.programs}>
            <ProgramsComponent programs={this.state.present} />
          </div>
        </div>
      )
    }
  },
)
