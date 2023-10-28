import { PRODUCTS } from '@/constants/products'

export async function GET() {
  const featuredProducts = PRODUCTS.filter((product) => product.featured)

  return Response.json({ products: featuredProducts })
}
