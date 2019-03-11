import { Program } from './Program'

/**
 * @see {@link http://api-portal.nhk.or.jp/doc-request|ドキュメント リクエストの説明}
 */
export interface NowOnAir {
  /** 前に放送した番組 */
  previous?: Program

  /** 現在放送中の番組 */
  present: Program

  /** 次に放送予定の番組 */
  following?: Program
}

/**
 * @see {@link http://api-portal.nhk.or.jp/doc-request|ドキュメント リクエストの説明}
 */
export interface NowOnAirList {
  /** 現在提供中の番組 */
  nowonair_list: Record<string, NowOnAir>
}
