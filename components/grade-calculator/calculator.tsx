'use client'
import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { CardDescription } from '../ui/card'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'

import CalculatorForm from './calculator-form'
import { AnimatePresence } from 'framer-motion'

type CsClass = 'CS 210' | 'CS 460'

const Calculator = () => {
  const [csClass, setCsClass] = useState<CsClass | undefined>(undefined)

  useEffect(() => {}, [])

  return (
    <Dialog>
      <DialogTrigger className="font-sans text-gray-50 opacity-50 hover:opacity-100">
        Calculator
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Grade Calculator</DialogTitle>
          <CardDescription>
            Select which class you are in and then fill out the form.
          </CardDescription>
        </DialogHeader>

        <ToggleGroup type="single">
          <ToggleGroupItem onClick={() => setCsClass('CS 210')} value="CS 210">
            CS 210
          </ToggleGroupItem>
          <ToggleGroupItem onClick={() => setCsClass('CS 460')} value="CS 460">
            CS 460
          </ToggleGroupItem>
        </ToggleGroup>
        <AnimatePresence>
          {csClass && <CalculatorForm csClass={csClass} />}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}

export default Calculator
