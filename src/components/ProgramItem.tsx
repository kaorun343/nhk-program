// Libraries
import React, { FC, useMemo } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

// Mine
import { Program } from '../models/Program'
import { formatTimeRange } from '../services/date'

type Props = {
  title: string
  program: Program
}

/**
 * 番組情報を表示するコンポーネント
 */
export const ProgramItem: FC<Props> = ({ title, program }) => {
  const timeRange = useMemo(
    () => formatTimeRange(program.start_time, program.end_time),
    [program],
  )

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>{title}</Typography>
        <Typography variant="h5" component="h2">
          {program.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {timeRange}
        </Typography>
        <Typography component="p">{program.subtitle}</Typography>
      </CardContent>
    </Card>
  )
}
