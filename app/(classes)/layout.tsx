import { Skeleton } from '@/components/ui/skeleton'
import { Suspense } from 'react'

export default function ClassLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="p-24">{children}</div>
}
