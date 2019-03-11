import { List } from '../models/Program'
import { DescriptionList } from '../models/Description'
import { NowOnAirList } from '../models/NowOnAir'

const ENDPOINT = 'http://api.nhk.or.jp/v2/pg'
const API_KEY: string = process.env.API_KEY!

/**
 * 放送地域、サービス（放送波）、日付を指定することで、該当する番組表情報を取得することが可能です。
 * @see {@link https://api-portal.nhk.or.jp/doc_list-v1_con|Program List API (Ver.2)}
 * @param area 地域ID
 * @param service サービスID
 * @param date 日付（YYYY-MM-DD形式、当日から１週間先までの日付を指定）
 */
export function programListApi(area: string, service: string, date: string) {
  const url = `${ENDPOINT}/list/${area}/${service}/${date}.json?key=${API_KEY}`
  return fetch(url)
    .then<List>(response => response.json())
    .then(json => json.list)
}

/**
 * 放送地域、ＥＰＧ番組ジャンル、日付を指定することで、該当する条件の番組リストを取得することが可能です。
 * @see {@link https://api-portal.nhk.or.jp/doc_genre-v1_con|Program Genre API (Ver.2)}
 * @param area 地域ID
 * @param service サービスID
 * @param genre ジャンルID
 * @param date 日付（YYYY-MM-DD形式、当日から１週間先までの日付を指定）
 */
export function programGenreApi(
  area: string,
  service: string,
  genre: string,
  date: string,
) {
  const url = `${ENDPOINT}/genre/${area}/${service}/${genre}/${date}.json?key=${API_KEY}`
  return fetch(url)
    .then<List>(response => response.json())
    .then(json => json.list)
}

/**
 * 番組IDを指定することで、該当する番組の詳細情報を取得することが可能です。
 * @see {@link https://api-portal.nhk.or.jp/doc_info-v1_con|Program Info API (Ver.2)}
 * @param area 地域ID
 * @param service サービスID
 * @param id 番組ID
 */
export function programLinfoApi(area: string, service: string, id: string) {
  const url = `${ENDPOINT}/info/${area}/${service}/${id}.json?key=${API_KEY}`
  return fetch(url)
    .then<DescriptionList>(response => response.json())
    .then(json => json.list)
}

/**
 * 放送地域、サービス（放送波）を指定することで、現在放送している番組情報を取得することが可能です。
 * @see {@link https://api-portal.nhk.or.jp/doc_now-v1_con|Now On Air API (Ver.2)}
 * @param area 地域ID
 * @param service サービスID
 */
export function nowOnAirApi(area: string, service: string) {
  const url = `${ENDPOINT}/now/${area}/${service}.json?key=${API_KEY}`
  return fetch(url)
    .then<NowOnAirList>(response => response.json())
    .then(json => json.nowonair_list)
}
