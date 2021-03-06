import { Program } from './Program'
import { TV, RADIO } from './Service'

/**
 * @see {@link http://api-portal.nhk.or.jp/doc-request |ドキュメント リクエストの説明}
 */
export type NowOnAir = {
  /** 前に放送した番組 */
  previous?: Program

  /** 現在放送中の番組 */
  present: Program

  /** 次に放送予定の番組 */
  following?: Program
}

/**
 * @see {@link http://api-portal.nhk.or.jp/doc-request |ドキュメント リクエストの説明}
 */
export type CollectionOfNowOnAir = Record<TV | RADIO, NowOnAir>

/**
 * @see {@link http://api-portal.nhk.or.jp/doc-request |ドキュメント リクエストの説明}
 */
export type NowOnAirList = {
  /** 現在提供中の番組 */
  nowonair_list: CollectionOfNowOnAir
}
