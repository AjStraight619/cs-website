'use client'
import { people } from '@/lib/data'
import { IntroCard } from './intro-card'
import { SectionDivider } from './section-divider'

export const IntroCards = () => {
  return (
    <section className="mb-24 container p-20 rounded-lg bg-slate-400/50 bg-opacity-5">
      <SectionDivider>Meet The Team</SectionDivider>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {people.map((person, index) => (
          <IntroCard key={index} {...person} />
        ))}
      </div>
    </section>
  )
}
