// Libraries
import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'

// Mine
import { Program } from '../models/Program'
import { ProgramItem } from './ProgramItem'

type Props = {
  programs: ReadonlyArray<Program>
}

const useStyles = makeStyles({
  program: {
    flex: 1,
    padding: '1rem',
  },
})

/**
 * 番組一覧を表示するコンポーネント
 */
export const ProgramList: FC<Props> = ({ programs }) => {
  const classes = useStyles()

  return (
    <div>
      <div>
        {programs.map((program, idx) => (
          <div className={classes.program} key={idx}>
            <div>{program.service.name}</div>
            <ProgramItem program={program} />
          </div>
        ))}
      </div>
    </div>
  )
}
