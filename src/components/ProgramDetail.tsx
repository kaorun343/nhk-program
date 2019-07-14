// Libraries
import React, { FC, useMemo } from 'react'
import { Typography, Card, CardContent } from '@material-ui/core'

// Mine
import { Descriptiton } from '../models/Description'
import { formatTimeRange } from '../services/date'

type Props = {
  program: Descriptiton
}

/**
 * 該当する番組の詳細情報を表示するコンポーネント
 */
export const ProgramDetail: FC<Props> = ({ program }) => {
  const timeRange = useMemo(
    () => formatTimeRange(program.start_time, program.end_time),
    [program],
  )

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {program.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {timeRange}
        </Typography>
        <Typography component="p" gutterBottom>
          {program.subtitle}
        </Typography>
        <Typography variant="h6" component="h3">
          番組詳細
        </Typography>
        <Typography component="p" gutterBottom>
          {program.content}
        </Typography>
        <Typography variant="h6" component="h3">
          出演者
        </Typography>
        <Typography component="p">{program.act}</Typography>
      </CardContent>
    </Card>
  )
}
