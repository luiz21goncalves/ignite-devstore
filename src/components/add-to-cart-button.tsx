'use client'

import { useCart } from '@/contexts/cart-context'

type AddToCartButtonProps = {
  productId: number
}

export function AddToCartButton(props: AddToCartButtonProps) {
  const { productId } = props

  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddProductToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
