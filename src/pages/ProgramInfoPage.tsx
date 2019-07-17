// Libraries
import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

// Mine
import { useProgramInfo } from '../hooks/useProgramInfo'
import { ProgramDetail } from '../components/ProgramDetail'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { TV, RADIO } from '../models/Service'

type Params = {
  area: string
  service: TV | RADIO
  id: string
}

export const ProgramInfoPage: FC<RouteComponentProps<Params>> = ({ match }) => {
  const { area, service, id } = match.params
  const program = useProgramInfo(area, service, id)

  return (
    <DefaultLayout title="番組詳細">
      {program ? <ProgramDetail program={program} /> : <div>読み込み中</div>}
    </DefaultLayout>
  )
}
