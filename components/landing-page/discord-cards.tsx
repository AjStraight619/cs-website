'use client'
import { motion } from 'framer-motion'
import { SectionDivider } from './section-divider'

const discordIframes = [
  {
    name: 'CS 210',
    src: 'https://discord.com/widget?id=1183649805415743528&theme=dark',
  },

  {
    name: 'CS 460',
    src: 'https://discord.com/widget?id=1183649881026461747&theme=dark',
  },
]

const DiscordCards = () => {
  return (
    <section className="container mb-12">
      <SectionDivider>What are we discussing this week?</SectionDivider>
      <motion.ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center">
        {discordIframes.map((option, index) => (
          <motion.li key={index}>
            <p className="mb-1 font-poppins text-discordPurple">
              {option.name}
            </p>
            <iframe
              height="400"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              src={option.src}
            ></iframe>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default DiscordCards
