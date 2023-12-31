import { NextRequest } from 'next/server'

import { z } from 'zod'

import { PRODUCTS } from '@/constants/products'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const products = PRODUCTS.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}
