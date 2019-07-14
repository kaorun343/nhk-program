import { useState, useEffect } from 'react'
import { Descriptiton } from '../models/Description'
import { programInfoApi } from '../infrastructures/api'

/**
 * 番組の詳細情報を取り扱うカスタムフック
 * 引数は `programInfoApi` 関数の引数と同一
 * @param area 地域ID
 * @param service サービスID
 * @param id 番組ID
 */
export function useProgramInfo(area: string, service: string, id: string) {
  const [description, setDescription] = useState(null as Descriptiton | null)

  useEffect(() => {
    programInfoApi(area, service, id)
      .then(list => list[service][0])
      .then(setDescription)
  }, [area, service, id])

  return description
}
