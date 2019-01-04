import { Area } from './Area'
import { Service } from './Service'

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