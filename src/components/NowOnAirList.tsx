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
  programs: {
    paddingBottom: '1rem',
  },
  program: {
    paddingTop: '1rem',
  },
})

/**
 * 現在放送中の番組一覧を表示するコンポーネント
 */
export const NowOnAirList: FC<Props> = ({ programs }) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.programs}>
        {programs.map(program => {
          const channel = program.service.name
          return (
            <div className={classes.program} key={channel}>
              <ProgramItem title={channel} program={program} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
