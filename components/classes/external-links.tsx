'use client'
import { externalLinks } from '@/lib/data'
import { usePathname } from 'next/navigation'
import React from 'react'
import CategoryDivider from './category-divider'
import { ExternalLinkIcon } from 'lucide-react'

const ExternalLinks = () => {
  const pathname = usePathname()
  const urlKey = pathname.split('/')[2].split('-').join(' ')

  console.log('urlKey:', urlKey)

  return (
    <section className="mb-12">
      <div className="flex flex-col container">
        <CategoryDivider isResources={true}>Resources</CategoryDivider>
        <ul className="flex flex-col gap-4">
          {Object.entries(externalLinks).map(([key, values]) => {
            if (key === urlKey) {
              return values.map((link, index) => (
                <li
                  className="opacity-60 hover:opacity-100 transition-colors duration-150 "
                  key={index}
                >
                  <a
                    className="flex flex-row gap-2 items-center"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{link.name}</span>
                    <span>
                      <ExternalLinkIcon size={20} />
                    </span>
                  </a>
                </li>
              ))
            } else {
              return null
            }
          })}
        </ul>
      </div>
    </section>
  )
}

export default ExternalLinks