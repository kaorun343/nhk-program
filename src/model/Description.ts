import { Area } from './Area'
import { Service } from './Service'
import { Logo } from './Logo'

export interface Descriptiton {
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

  /** 番組詳細 */
  content: string

  /** 出演者 */
  act: string

  /** 番組ジャンル */
  genres: string[]

  /** 番組ロゴ画像（Logoオブジェクト） */
  program_logo: Logo

  /** 番組サイトURL（番組単位）） */
  program_url?: string

  /** 番組サイトURL（放送回単位） */
  episode_url?: string

  /** 番組に関連するハッシュタグ */
  hashtags: string[]
}
