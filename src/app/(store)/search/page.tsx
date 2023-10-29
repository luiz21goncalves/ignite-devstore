import Image from 'next/image'
import Link from 'next/link'

import { PRODUCTS } from '@/constants/products'
import { formatToBrlCurrency } from '@/utils/formatToBrlCurrency'

export default async function SearchProducts() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultado para: <span className="font-semibold">moleton</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {PRODUCTS.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative flex justify-center overflow-hidden rounded-lg bg-zinc-900"
            >
              <Image
                src={product.image}
                alt=""
                className="transition-transform duration-500 group-hover:scale-105"
                width={480}
                height={480}
                quality={100}
              />

              <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="truncate text-sm">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {formatToBrlCurrency(product.price)}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
