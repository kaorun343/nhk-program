export function getApiKey() {
  const API_KEY = process.env.API_KEY

  if (API_KEY) {
    return API_KEY
  }

  throw new Error('NO API_KEY!!')
}
