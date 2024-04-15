import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'

type CalculatorFormProps = {
  csClass: string | undefined
}

const formAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

const CalculatorForm = ({ csClass }: CalculatorFormProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={formAnimation}
      className="flex flex-col items-center justify-center w-full gap-y-2"
    >
      <h2 className="text-2xl font-poppins mb-4">{csClass}</h2>
      <form className="w-full space-y-2">
        <Label>Assignment Score</Label>
        <Input />
        <Label>Midterm Score</Label>
        <Input />
        <Label>Final Score</Label>
        <Input />
        <Button className="w-full">Calculate Grade</Button>
      </form>
    </motion.div>
  )
}

export default CalculatorForm
