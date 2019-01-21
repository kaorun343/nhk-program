// Libraries
import * as React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

// Mine
import { Program } from '../model/Program'
import { ProgramComponent } from './Program'

export type Props = {
  programs: Program[]
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
          <div className={classes.program}>
            <div>{program!.service.name}</div>
            <ProgramComponent key={idx} program={program} />
          </div>
        ))}
      </div>
    </div>
  ),
)
