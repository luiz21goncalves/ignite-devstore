import { ReactNode } from 'react'

import { Header } from '@/components/header'

type StoreLayoutProps = {
  children: ReactNode
}

export default function StoreLayout(props: StoreLayoutProps) {
  const { children } = props

  return (
    <div className="mix-h-screen mix-w-[1600px] mx-auto grid w-full grid-rows-app gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}
