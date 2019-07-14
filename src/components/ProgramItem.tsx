// Libraries
import React, { FC, useMemo } from 'react'
import { Link } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

// Mine
import { Program } from '../models/Program'
import { formatTimeRange } from '../services/date'
import { Link as RouterLink } from 'react-router-dom'

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

  const to = useMemo(() => {
    const area = program.area.id
    const service = program.service.id
    const id = program.id

    return `/programs/${area}/${service}/${id}`
  }, [program])

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>{title}</Typography>
        <Typography variant="h5" component="h2">
          <Link component={RouterLink} to={to} color="inherit">
            {program.title}
          </Link>
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {timeRange}
        </Typography>
        <Typography component="p">{program.subtitle}</Typography>
      </CardContent>
    </Card>
  )
}
