// Libraries
import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'

// Mine
import { Program } from '../models/Program'
import { nowOnAirApi } from '../infrastructures/api'
import { ProgramsComponent } from '../components/Programs'
import { AppBarComponent } from '../components/AppBar'

const styles = createStyles({
  programs: {
    padding: '1rem',
  },
})

export const App = withStyles(styles)(
  (props: WithStyles<keyof typeof styles>) => {
    const [present, setPresent] = React.useState([] as ReadonlyArray<Program>)

    const getPrograms = React.useCallback(() => {
      nowOnAirApi('010', 'tv').then(list => {
        const channelsKeys = ['g1', 'g2', 'e1', 'e3', 's1', 's3']
        const channels = channelsKeys.map(key => list[key])
        const present = channels.map(channel => channel.present)
        setPresent(present)
      })
    }, [present])

    React.useEffect(() => getPrograms(), [])

    return (
      <div>
        <AppBarComponent reload={getPrograms} />
        <div className={props.classes.programs}>
          <ProgramsComponent programs={present} />
        </div>
      </div>
    )
  },
)
