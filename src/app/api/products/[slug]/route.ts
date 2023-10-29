import { z } from 'zod'

import { PRODUCTS } from '@/constants/products'

type Context = {
  params: { slug: string }
}

export async function GET(_request: Request, context: Context) {
  const slug = z.string().parse(context.params.slug)

  const product = PRODUCTS.find((product) => product.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }

  return Response.json(product)
}
