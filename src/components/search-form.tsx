'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

import { Search } from 'lucide-react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return
    }

    router.push(`/search?q=${query}`)
  }

  const query = searchParams.get('q') ?? ''

  return (
    <form
      onSubmit={handleSearch}
      className="rind-zinc-700 flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3"
    >
      <Search className="h-5 w-5 text-zinc-500" />

      <input
        name="q"
        defaultValue={query}
        required
        type="text"
        placeholder="Burcar produtos ..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}
