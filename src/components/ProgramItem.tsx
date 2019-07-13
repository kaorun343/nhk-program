// Libraries
import React, { FC } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

// Mine
import { Program } from '../models/Program'
import { formatTime } from '../services/date'

type Props = {
  program: Program
}

/**
 * 番組情報を表示するコンポーネント
 */
export const ProgramItem: FC<Props> = ({ program }) => (
  <Card>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {formatTime(program.start_time)} ~ {formatTime(program.end_time)}
      </Typography>
      <Typography variant="h5" component="h2">
        {program.title}
      </Typography>
      <Typography component="p">{program.subtitle}</Typography>
    </CardContent>
  </Card>
)
