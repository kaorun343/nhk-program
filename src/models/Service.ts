import { Logo } from './Logo'

/**
 * @see {@link http://api-portal.nhk.or.jp/doc-request |ドキュメント リクエストの説明}
 */
export interface Service {
  /** サービスID */
  id: string

  /** サービス名 */
  name: string

  logo_s: Logo
  logo_m: Logo
  logo_l: Logo
}
