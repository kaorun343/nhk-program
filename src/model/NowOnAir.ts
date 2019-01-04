import { Program } from './Program'

export interface NowOnAir {
  /** 前に放送した番組 */
  previous?: Program

  /** 現在放送中の番組 */
  present: Program

  /** 次に放送予定の番組 */
  following?: Program
}

export interface NowOnAirList {
  [key: string]: NowOnAir
}
