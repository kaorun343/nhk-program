// Libraries
import React, { FC } from 'react'

// Mine
import { NowOnAirList } from '../components/NowOnAirList'
import { useNowOnAir } from '../hooks/useNowOnAir'
import { DefaultLayout } from '../layouts/DefaultLayout'

export const NowOnAirPage: FC = () => {
  const [present, getPrograms] = useNowOnAir()

  return (
    <DefaultLayout title="現在放送している番組" onReload={getPrograms}>
      <NowOnAirList programs={present} />
    </DefaultLayout>
  )
}
