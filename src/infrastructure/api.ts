import { List } from '../model/Program'
import { DescriptionList } from '../model/Description'
import { NowOnAirList } from '../model/NowOnAir'

const ENDPOINT = 'http://api.nhk.or.jp/v2/pg'
const API_KEY: string = process.env.API_KEY!

/**
 * 放送地域、サービス（放送波）、日付を指定することで、該当する番組表情報を取得することが可能です。
 * @param area 地域ID
 * @param service サービスID
 * @param date 日付（YYYY-MM-DD形式、当日から１週間先までの日付を指定）
 */
export async function programListApi(
  area: string,
  service: string,
  date: string,
): Promise<List> {
  const url = `${ENDPOINT}/list/${area}/${service}/${date}.json?key=${API_KEY}`
  const response = await fetch(url)
  return response.json()
}

/**
 * 放送地域、ＥＰＧ番組ジャンル、日付を指定することで、該当する条件の番組リストを取得することが可能です。
 * @param area 地域ID
 * @param service サービスID
 * @param genre ジャンルID
 * @param date 日付（YYYY-MM-DD形式、当日から１週間先までの日付を指定）
 */
export async function programGenreApi(
  area: string,
  service: string,
  genre: string,
  date: string,
): Promise<List> {
  const url = `${ENDPOINT}/genre/${area}/${service}/${genre}/${date}.json?key=${API_KEY}`
  const response = await fetch(url)
  return response.json()
}

/**
 * 番組IDを指定することで、該当する番組の詳細情報を取得することが可能です。
 * @param area 地域ID
 * @param service サービスID
 * @param id 番組ID
 */
export async function programLinfoApi(
  area: string,
  service: string,
  id: string,
): Promise<DescriptionList> {
  const url = `${ENDPOINT}/info/${area}/${service}/${id}.json?key=${API_KEY}`
  const response = await fetch(url)
  return response.json()
}

/**
 * 放送地域、サービス（放送波）を指定することで、現在放送している番組情報を取得することが可能です。
 * @param area 地域ID
 * @param service サービスID
 */
export async function nowOnAirApi(
  area: string,
  service: string,
): Promise<NowOnAirList> {
  const url = `${ENDPOINT}/now/${area}/${service}.json?key=${API_KEY}`
  const response = await fetch(url)
  return response.json()
}
