// Libraries
import { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

// Mine
import { nowOnAirApi } from '../infrastructures/api'
import { Program, uniquePrograms } from '../models/Program'
import { selectAreaId } from '../store/selectors'

/**
 * 現在放送中の番組を取り扱うカスタムフック
 */
export function useNowOnAir() {
  const area = useSelector(selectAreaId)
  const [present, setPresent] = useState([] as readonly Program[])

  const updatePresent = useCallback(() => {
    getPrograms(area).then(setPresent)
  }, [area])

  useEffect(() => {
    getPrograms(area).then(setPresent)
  }, [area])

  return [present, updatePresent] as const
}

async function getPrograms(area: string) {
  const list = await nowOnAirApi(area, 'tv')

  // format now on air list
  const channels = Object.values(list)
  const present = channels.map(channel => channel.present)

  return uniquePrograms(present)
}
