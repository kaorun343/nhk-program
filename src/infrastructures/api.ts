import { DescriptionList } from '../models/Description'
import { NowOnAirList } from '../models/NowOnAir'
import { getApiKey } from '../services/apiKey'
import { TV, RADIO } from '../models/Service'

const ENDPOINT = 'http://api.nhk.or.jp/v2/pg'
const API_KEY = getApiKey()

/**
 * 放送地域、サービス（放送波）、日付を指定することで、該当する番組表情報を取得することが可能です。
 * @see {@link https://api-portal.nhk.or.jp/doc_list-v1_con |Program List API (Ver.2)}
 * @param area 地域ID
 * @param service サービスID
 * @param date 日付（YYYY-MM-DD形式、当日から１週間先までの日付を指定）
 */
export async function programListApi(
  area: string,
  service: TV | RADIO | 'tv' | 'radio',
  date: string,
) {
  const url = `${ENDPOINT}/list/${area}/${service}/${date}.json?key=${API_KEY}`
  const json = await getJsonFromServer<DescriptionList>(url)
  return json.list
}

/**
 * 放送地域、ＥＰＧ番組ジャンル、日付を指定することで、該当する条件の番組リストを取得することが可能です。
 * @see {@link https://api-portal.nhk.or.jp/doc_genre-v1_con |Program Genre API (Ver.2)}
 * @param area 地域ID
 * @param service サービスID
 * @param genre ジャンルID
 * @param date 日付（YYYY-MM-DD形式、当日から１週間先までの日付を指定）
 */
export async function programGenreApi(
  area: string,
  service: TV | RADIO | 'tv' | 'radio',
  genre: string,
  date: string,
) {
  const url = `${ENDPOINT}/genre/${area}/${service}/${genre}/${date}.json?key=${API_KEY}`
  const json = await getJsonFromServer<DescriptionList>(url)
  return json.list
}

/**
 * 番組IDを指定することで、該当する番組の詳細情報を取得することが可能です。
 * @see {@link https://api-portal.nhk.or.jp/doc_info-v1_con |Program Info API (Ver.2)}
 * @param area 地域ID
 * @param service サービスID
 * @param id 番組ID
 */
export async function programInfoApi(
  area: string,
  service: TV | RADIO | 'tv' | 'radio',
  id: string,
) {
  const url = `${ENDPOINT}/info/${area}/${service}/${id}.json?key=${API_KEY}`
  const json = await getJsonFromServer<DescriptionList>(url)
  return json.list
}

/**
 * 放送地域、サービス（放送波）を指定することで、現在放送している番組情報を取得することが可能です。
 * @see {@link https://api-portal.nhk.or.jp/doc_now-v1_con |Now On Air API (Ver.2)}
 * @param area 地域ID
 * @param service サービスID
 */
export async function nowOnAirApi(
  area: string,
  service: TV | RADIO | 'tv' | 'radio',
) {
  const url = `${ENDPOINT}/now/${area}/${service}.json?key=${API_KEY}`
  const json = await getJsonFromServer<NowOnAirList>(url)
  return json.nowonair_list
}

async function getJsonFromServer<T>(url: string) {
  const response = await fetch(url)
  const json: T = await response.json()
  return json
}
