import { Logo } from './Logo'

/**
 * @see {@link http://api-portal.nhk.or.jp/doc-request |ドキュメント リクエストの説明}
 */
export type Service = {
  /** サービスID */
  id: TV | RADIO

  /** サービス名 */
  name: string

  logo_s: Logo
  logo_m: Logo
  logo_l: Logo
}

/** NHK 総合 */
export type GTV = 'g1' | 'g2'
/** NHK Eテレ */
export type ETV = 'e1' | 'e2' | 'e3' | 'e4'
/** NHK BS1 */
export type BS1 = 's1' | 's2'
/** NHK BSプレミアム */
export type BSP = 's3' | 's4'
/** NHK AM */
export type AM = 'r1' | 'r2'
/** NHK FM */
export type FM = 'r3'
/** ラジオ全て */
export type RADIO = AM | FM
/** テレビ全て */
export type TV = GTV | ETV | BS1 | BSP

export const allRadios: readonly RADIO[] = ['r1', 'r2', 'r3']
export const allGTVs: readonly GTV[] = ['g1', 'g2']
export const allETVs: readonly ETV[] = ['e1', 'e2', 'e3', 'e4']
export const allBSs: readonly (BS1 | BSP)[] = ['s1', 's2', 's3', 's4']
export const allTVs: readonly TV[] = [...allGTVs, ...allETVs, ...allBSs]

/**
 * サービスIDに対応する `tv` または `radio` を返す
 * @param service サービスID
 */
export function getParentCategory(service: TV | RADIO) {
  return (allTVs as readonly string[]).includes(service) ? 'tv' : 'radio'
}

const serviceNameList: Record<TV | RADIO, string> = {
  // NHK 総合
  g1: 'ＮＨＫ総合１',
  g2: 'ＮＨＫ総合２',
  // NHK Eテレ
  e1: 'ＮＨＫＥテレ１',
  e2: 'ＮＨＫＥテレ２',
  e3: 'ＮＨＫＥテレ３',
  e4: 'ＮＨＫワンセグ２',
  // NHK BS1
  s1: 'ＮＨＫＢＳ１',
  s2: 'ＮＨＫＢＳ１(１０２ｃｈ)',
  // NHK BSプレミアム
  s3: 'ＮＨＫＢＳプレミアム',
  s4: 'ＮＨＫＢＳプレミアム(１０４ｃｈ)',
  // NHK AM
  r1: 'ＮＨＫラジオ第1',
  r2: 'ＮＨＫラジオ第2',
  // NHK FM
  r3: 'ＮＨＫＦＭ',
}

/**
 * サービスIDからサービス名を返す
 * @param service サービスID
 */
export function getServiceName(service: TV | RADIO) {
  return serviceNameList[service]
}
