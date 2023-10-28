'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

type CartItem = {
  productId: number
  quantity: number
}

type CartContextType = {
  item: CartItem[]
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider(props: CartProviderProps) {
  const { children } = props

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItems((state) => {
      const hasProductInCart = state.some(
        (item) => item.productId === productId,
      )

      if (hasProductInCart) {
        return state.map((item) => {
          return item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        })
      }

      return [...state, { productId, quantity: 1 }]
    })
  }

  return (
    <CartContext.Provider value={{ item: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
