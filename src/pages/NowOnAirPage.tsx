// Libraries
import React, { FC, useContext } from 'react'

// Mine
import { NowOnAirList } from '../components/NowOnAirList'
import { useNowOnAir } from '../hooks/useNowOnAir'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { AreaIdContext } from '../contexts/AreaId'

export const NowOnAirPage: FC = () => {
  const area = useContext(AreaIdContext)
  const [present, updatePresent] = useNowOnAir(area)

  return (
    <DefaultLayout title="現在放送している番組" onReload={updatePresent}>
      <NowOnAirList programs={present} />
    </DefaultLayout>
  )
}
