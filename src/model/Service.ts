import { Logo } from './Logo'

export interface Service {
  /** サービスID */
  id: string

  /** サービス名 */
  name: string

  logo_s: Logo
  logo_m: Logo
  logo_l: Logo
}
