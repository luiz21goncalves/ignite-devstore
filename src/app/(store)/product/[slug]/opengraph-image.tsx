import { ImageResponse } from 'next/server'

import { zinc } from 'tailwindcss/colors'

import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { ENV } from '@/env'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProduct(slug: string): Promise<Product | null> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const product = response.json()

  return product
}

type OgImageProps = { params: { slug: string } }

export default async function OgImage(props: OgImageProps) {
  const { params } = props

  const product = await getProduct(params.slug)

  const productImageURL = new URL(product?.image ?? '', ENV.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={productImageURL} alt="" style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
