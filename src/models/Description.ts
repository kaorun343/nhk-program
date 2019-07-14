import { Area } from './Area'
import { Service } from './Service'
import { Logo } from './Logo'

/**
 * @see {@link http://api-portal.nhk.or.jp/doc-request |ドキュメント リクエストの説明}
 */
export type Descriptiton = {
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

/**
 * @see {@link http://api-portal.nhk.or.jp/doc-request |ドキュメント リクエストの説明}
 */
export type CollectionOfDescription = Record<string, readonly Descriptiton[]>

/**
 * @see {@link http://api-portal.nhk.or.jp/doc-request |ドキュメント リクエストの説明}
 */
export type DescriptionList = {
  /** 番組 */
  list: CollectionOfDescription
}
