// Libraries
import { useState, useEffect, useCallback } from 'react'

// Mine
import { nowOnAirApi } from '../infrastructures/api'
import { Program, uniquePrograms } from '../models/Program'

/**
 * 現在放送中の番組を取り扱うカスタムフック
 * @param area エリアID
 */
export function useNowOnAir(area: string) {
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
