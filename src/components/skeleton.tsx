import { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

type SkeletonProps = ComponentProps<'div'>

export function Skeleton(props: SkeletonProps) {
  const { className, ...attrs } = props

  return (
    <div
      className={twMerge('animate-pulse rounded-md bg-zinc-50/10', className)}
      {...attrs}
    />
  )
}
