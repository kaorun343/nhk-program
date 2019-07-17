import { useState, useEffect, useCallback } from 'react'
import { nowOnAirApi } from '../infrastructures/api'
import { Program, uniquePrograms } from '../models/Program'

async function getPrograms() {
  const list = await nowOnAirApi('010', 'tv')

  // format now on air list
  const channels = Object.values(list)
  const present = channels.map(channel => channel.present)

  return uniquePrograms(present)
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
