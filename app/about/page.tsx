'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function AboutPage() {
  const [projects, setProjects] = useState([
    {
      name: '3D Printing',
      description: 'An Outreach program with Miramar Ranch Elementary School',
      teamMembers: ['Brandon', 'Robert'],
    },
    {
      name: 'CS Website',
      description:
        'A Course Repository for all Lower division CS courses at SDSU',
      teamMembers: ['Alex', 'Jaydeep', 'Jaxon'],
    },
  ])

  return (
    <main className="py-16 container flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="font-roboto_condensed">
        <h1 className=" text-center text-3xl mb-8 mt-20">About Me</h1>
        <p className="text-center mb-5 text-xl">
          Hello! I am Manju, a CS Lecturer based in California.
        </p>
        <p>
          Off campus, I conduct STEAM workshops for Sally Ride Science (UCSD).
          You will also find me dabbling in ceramics, practicing Bharathnatyam
          (an Indian classical dance form), building Legos or enjoying a smooth
          Flat White at a local cafe around town.
        </p>
        <h2 className="text-2xl mt-8 mb-4">Ongoing Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <h4 className="mt-4 mb-2">Team Members:</h4>
            <ul>
              {project.teamMembers.map((member, idx) => (
                <li key={idx} className="flex items-center mb-2">
                  <Input
                    value={member}
                    readOnly
                    className="bg-gray-100 border-none"
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
