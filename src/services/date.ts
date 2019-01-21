function zeroPadding(number: number) {
  return `${number}`.padStart(2, '0')
}

/**
 * 時刻を整形する
 * @param text 整形前の日時テキスト
 */
export function formatTime(text: string) {
  const obj = new Date(text)
  const hours = obj.getHours()
  const minutes = obj.getMinutes()

  return `${zeroPadding(hours)}:${zeroPadding(minutes)}`
}

export function formatDate(text: string | Date) {
  const obj = new Date(text)
  const year = obj.getFullYear()
  const month = obj.getMonth() + 1
  const date = obj.getDate()

  return `${year}-${zeroPadding(month)}-${zeroPadding(date)}`
}
