import { useState, useEffect, useCallback } from 'react'
import { nowOnAirApi } from '../infrastructures/api'
import { Program } from '../models/Program'

const channelsKeys = ['g1', 'g2', 'e1', 'e3', 's1', 's3']

async function getPrograms() {
  const list = await nowOnAirApi('010', 'tv')
  const channels = channelsKeys.map(key => list[key])
  const present = channels.map(channel => channel.present)
  return present
}

export function useNowOnAir() {
  const [present, setPresent] = useState([] as readonly Program[])

  const updatePresent = useCallback(() => {
    getPrograms().then(setPresent)
  }, [])

  useEffect(() => {
    getPrograms().then(setPresent)
  }, [])

  return [present, updatePresent] as const
}
