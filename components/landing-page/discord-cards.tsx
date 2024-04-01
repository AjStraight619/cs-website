'use client'
import { motion } from 'framer-motion'
import { SectionDivider } from './section-divider'

const discordIframes = [
  {
    name: 'CS 210 Section 1',
    src: 'https://discord.com/widget?id=1183649805415743528&theme=dark',
  },
  {
    name: 'CS 210 Section 2',
    src: '"https://discord.com/widget?id=1183649706065276948&theme=dark"',
  },
  {
    name: 'CS 460 Section 3',
    src: '"https://discord.com/widget?id=1183649881026461747&theme=dark"',
  },
]

const DiscordCards = () => {
  return (
    <>
      <SectionDivider>What are we discussing this week?</SectionDivider>
      <motion.ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {discordIframes.map((option, index) => (
          <motion.li key={index}>
            <p className="mb-1 font-poppins text-secondary-foreground">
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
    </>
  )
}

export default DiscordCards
