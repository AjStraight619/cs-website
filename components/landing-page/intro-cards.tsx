'use client'
import { people } from '@/lib/data'
import { IntroCard } from './intro-card'
import { SectionDivider } from './section-divider'

export const IntroCards = () => {
  return (
    <section className="container p-20 rounded-lg bg-slate-200">
      <h1 className="sm:leading-loose font-roboto_condensed tracking-tight text-3xl text-center text-discordText mb-10">
        Meet the Team
      </h1>
      <p className="font-dm_serif_display text-center text-slate-600 mb-20">
        My TAs are amazing people who are available to guide you throughout the
        semester! You may approach any TA for the course irrespective of the
        section you are enrolled in.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {people.map((person, index) => (
          <IntroCard key={index} {...person} />
        ))}
      </div>
    </section>
  )
}
