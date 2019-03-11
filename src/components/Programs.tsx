// Libraries
import * as React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

// Mine
import { Program } from '../models/Program'
import { ProgramComponent } from './Program'

export type Props = {
  programs: ReadonlyArray<Program>
}

const styles = createStyles({
  program: {
    flex: 1,
    padding: '1rem',
  },
})

/**
 * 番組一覧を表示するコンポーネント
 */
export const ProgramsComponent = withStyles(styles)(
  ({ programs, classes }: Props & WithStyles<keyof typeof styles>) => (
    <div>
      <div>
        {programs.map((program, idx) => (
          <div className={classes.program} key={idx}>
            <div>{program.service.name}</div>
            <ProgramComponent program={program} />
          </div>
        ))}
      </div>
    </div>
  ),
)
