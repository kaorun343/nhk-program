import { Area } from './Area'
import { Service } from './Service'

/**
 * @see {@link http://api-portal.nhk.or.jp/doc-request |ドキュメント リクエストの説明}
 */
export interface Program {
  /** 番組ID */
  id: string

  /** 番組イベントID */
  event_id: string

  /** 放送開始日時（YYYY-MM-DDTHH:mm:ssZ形式） */
  start_time: string

  /** 放送終了日時（YYYY-MM-DDTHH:mm:ssZ形式） */
  end_time: string

  area: Area

  service: Service

  /** 番組名 */
  title: string

  /** 番組内容 */
  subtitle: string

  /** 番組ジャンル */
  genres: string[]
}

export function uniquePrograms<T extends Pick<Program, 'id'>>(
  programs: readonly T[],
) {
  const ids = new Set(programs.map(program => program.id))

  const result: T[] = []
  for (const program of programs) {
    const id = program.id
    if (ids.has(id)) {
      result.push(program)
      ids.delete(id)
    }
  }

  return result
}

/**
 * @see {@link http://api-portal.nhk.or.jp/doc-request |ドキュメント リクエストの説明}
 */
export interface List {
  /** 番組 */
  list: Record<string, Program[]>
}
