// Libraries
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// Mine
import { Description } from '../models/Description'
import { programInfoApi } from '../infrastructures/api'
import { TV, RADIO } from '../models/Service'
import { selectAreaId } from '../store/selectors'

/**
 * 番組の詳細情報を取り扱うカスタムフック
 * @param service サービスID
 * @param id 番組ID
 */
export function useProgramInfo(service: TV | RADIO, id: string) {
  const area = useSelector(selectAreaId)
  const [description, setDescription] = useState(null as Description | null)

  useEffect(() => {
    programInfoApi(area, service, id)
      .then(list => list[service][0])
      .then(setDescription)
  }, [area, service, id])

  return description
}
