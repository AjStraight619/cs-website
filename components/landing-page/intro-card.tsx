import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { SectionDivider } from './section-divider'
import { GlobeIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type IntroCardProps = {
  name: string
  description?: string
  image: string
  position: string
  portfolioLink?: string
}

export const IntroCard = ({
  name,
  description,
  image,
  position,
  portfolioLink,
}: IntroCardProps) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Card className="min-w-[16rem]">
      <CardHeader className="flex items-center justify-center w-full p-3">
        {image ? (
          <Image
            src={image}
            alt="headshot"
            width="192"
            height="192"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.2rem] border-white shadow-xl"
          />
        ) : (
          <IoPersonCircleOutline className="w-24 h-24" />
        )}
        <CardTitle>{position}</CardTitle>
        <CardDescription>{name}</CardDescription>
      </CardHeader>

      <CardContent></CardContent>
      <CardFooter>
        {portfolioLink && (
          <motion.a
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex flex-row items-center gap-x-2"
            animate={{}}
            initial={{}}
            target="blank"
            href={portfolioLink}
          >
            <GlobeIcon size={20} />
            <AnimatePresence>
              {isHovering && (
                <motion.span
                  animate={{
                    x: 0,
                    transition: {
                      duration: 0.3,
                    },
                    opacity: 1,
                  }}
                  initial={{
                    opacity: 0,
                    x: '-50%',
                  }}
                  exit={{
                    x: '-50%',
                    transition: {
                      duration: 0.3,
                    },
                    opacity: 0,
                  }}
                >
                  Portfolio
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>
        )}
      </CardFooter>
    </Card>
  )
}
