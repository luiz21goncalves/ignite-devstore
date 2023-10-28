import { PRODUCTS } from '@/constants/products'

export async function GET() {
  return Response.json({ products: PRODUCTS })
}
