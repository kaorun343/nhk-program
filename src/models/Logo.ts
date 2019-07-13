/**
 * @see {@link http://api-portal.nhk.or.jp/doc-request |ドキュメント リクエストの説明}
 */
export interface Logo {
  /** ロゴ画像のURL */
  url?: string

  /** ロゴ画像の幅 */
  width?: string

  /** ロゴ画像の高さ */
  height?: string
}
