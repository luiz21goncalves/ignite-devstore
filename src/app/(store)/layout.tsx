import { ReactNode } from 'react'

import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'

type StoreLayoutProps = {
  children: ReactNode
}

export default function StoreLayout(props: StoreLayoutProps) {
  const { children } = props

  return (
    <CartProvider>
      <div className="mix-h-screen mx-auto grid w-full max-w-[1600px] grid-rows-app gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
