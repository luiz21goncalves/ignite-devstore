import { ENV } from '@/env'

export function api(path: string, init?: RequestInit) {
  const apiPrefix = '/api'

  const url = new URL(`${apiPrefix}${path}`, ENV.NEXT_PUBLIC_API_BASE_URL)

  return fetch(url, init)
}
