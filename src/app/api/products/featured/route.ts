import { PRODUCTS } from '@/constants/products'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const featuredProducts = PRODUCTS.filter((product) => product.featured)

  return Response.json(featuredProducts)
}
