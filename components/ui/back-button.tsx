'use client'

import { usePathname, useRouter } from 'next/navigation'

import React from 'react'
import { Button } from './button'
import { ChevronLeftIcon } from 'lucide-react'

const BackButton = () => {
  const pathname = usePathname()
  const { back } = useRouter()
  if (pathname === '/') return null
  return (
    <Button
      className="hover:opacity-100 opacity-55 hover:underline transition-all duration-150 ml-4 fixed top-20 left-2 md:top-3 z-[999] text-gray-50"
      onClick={() => back()}
      variant={null}
      size="icon"
    >
      <span>
        <ChevronLeftIcon />
      </span>
      <span>Back</span>
    </Button>
  )
}

export default BackButton
