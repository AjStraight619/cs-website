'use client'
import { usePathname } from 'next/navigation'

export default function Syllabus() {
  const pathName = usePathname()
  const parts = pathName.split('/')
  const course = parts[1]
  console.log(pathName, '')
  console.log(parts, '')
  return (
    <div>
      <h1 className="text-4xl font-roboto_condensed mb-4 text-discordText">
        Syllabus
      </h1>
      {course === 'cs210' ? (
        <div>
          <p>Put cs210 Syllabus Here.</p>
        </div>
      ) : (
        <div>
          {' '}
          <p>Put cs460 Syllabus Here.</p>
        </div>
      )}
    </div>
  )
}
