'use client'
import { usePathname } from 'next/navigation'
import { Separator } from '../ui/separator'
export default function Syllabus() {
  const pathName = usePathname()
  const parts = pathName.split('/')
  const course = parts[1]
  console.log(pathName, '')
  console.log(parts, '')
  return (
    <div>
      <h1 className="text-4xl font-roboto_condensed mb-4 text-discordText">
        Syllabus (Spring '24)
      </h1>
      {course === 'cs210' ? (
        <div className="font-roboto_condensed">
          <h3 className="font-semibold">Course Catalog Description:</h3>
          <p className="mb-5">
            Representations and operations on basic data structures. Arrays,
            linked lists, stacks, queues, and recursion; binary search trees and
            balanced trees; hash tables, dynamic storage management;
            introduction to graphs. An object-oriented programming language will
            be used.
          </p>

          <h3 className="font-semibold">Goals for this Course:</h3>
          <p className="mb-5">
            Upon completion of this course students will be able to:
          </p>
          <ul className="mb-5">
            <li>Analyze and measure complexities of algorithms</li>
            <li>Write Generic and Reusable code in C++</li>
            <li>
              Understand Inheritance, Interfaces, Polymorphism and Abstract Data
              Types in C++
            </li>
            <li>
              Apply design and development principles in the construction of
              software systems of varying complexity
            </li>
          </ul>

          <h3 className="font-semibold">Textbook:</h3>
          <p className="mb-5">
            This course will primarily use ZyBooks. There will be required
            reading worth 5% of the final grade. Instructions to use ZyBooks are
            as follows:
          </p>
          <ul className="mb-5">
            <li>
              Sign in or create an account at{' '}
              <a href="https://learn.zybooks.com">learn.zybooks.com</a>
            </li>
            <li>Enter zyBook code: SDSUCS210MuralidharanSpring2024</li>
            <li>
              Subscribe. A Subscription is $89 and lasts until May 2024. This is
              also covered under Equitable Access.
            </li>
          </ul>

          <h3 className="font-semibold">Programming Language Used:</h3>
          <p className="mb-5">
            C++ in CLion (CLion is free with your SDSU ID). Students must author
            original C++ code for all projects throughout this course. Student
            collaboration is encouraged to discuss programming strategies, but
            all work must be completed and submitted individually. Do not give
            access to your code to anyone.
          </p>

          <h3 className="font-semibold">Grading:</h3>
          <p className="mb-5">
            <ul className="mb-5">
              <li>Weekly Assignments (100 Points total worth 10%)</li>
              <li>ZyBooks Participation (5%)</li>
              <li>3 Programming assignments (10% each)</li>
              <li>2 Midterms (15% + 15%)</li>
              <li>Final Exam (25%)</li>
            </ul>
            <strong>Grade Split:</strong>
            <ul>
              <li>93% and above: A</li>
              <li>90%-92%: A–</li>
              <li>87%-89%: B+</li>
              <li>83%-86%: B</li>
              <li>80%-82%: B–</li>
              <li>77%-79%: C+</li>
              <li>73%-76%: C</li>
              <li>70%-72%: C–</li>
              <li>67%-69%: D+</li>
              <li>63%-66%: D</li>
              <li>60%-62%: D–</li>
              <li>Below 60%: F</li>
            </ul>
          </p>

          <h3 className="font-semibold">Turning in Work:</h3>
          <p className="mb-5">
            Instructions on what, when, where, and how to turn in assignments
            will be posted on Canvas, email, and Discord. It is the student’s
            responsibility to understand when and how to turn in the
            assignments.
          </p>

          <h3 className="font-semibold">Late Coursework:</h3>
          <p className="mb-5">
            All assignments are due on the date as stated on canvas. Once the
            due has passed links will be closed. Late Assignments will be marked
            down 25% every day of delay.
            <ul className="mb-5">
              <li>1 Day Late -25%</li>
              <li>2 Days Late -50%</li>
              <li>3 Day Late -75%</li>
              <li>4Th Day - Automatic zero</li>
            </ul>
          </p>

          <h3 className="font-semibold">Exams:</h3>
          <p className="mb-5">
            Exams will be closed book/closed notes. Computers/laptops and cell
            phones cannot be used during exams. Once an exam starts, students
            cannot leave and then return to the test room. Once a student leaves
            the test room, he/she may not work further on the exam. Do not seek
            assistance from other students during an exam, for doing so
            constitutes cheating. Instead, speak with the instructor. The date,
            time, and location of the midterms and final exam will be posted on
            Canvas.
          </p>
          <p className="mb-5">
            Unexcused absences on the day of an exam will result in the student
            receiving a 0 on the exam. No make-up exams will be given for
            unexcused absences from the exam. If the student has a prior known
            conflict on the date of the exam, please submit a request to
            reschedule to the instructor at least 5 days prior to the exam date.
            Rescheduling will be at the discretion of the instructor. If
            approved, the student may take the exam on an earlier date. If the
            student misses the exam due to an unforeseen circumstance, email the
            instructor to discuss options. Absence must be documented for
            rescheduling to be considered. If you need special accommodations
            for testing kindly contact the Student Ability Success Center ASAP:{' '}
            <a href="https://newscenter.sdsu.edu/student_affairs/sds/test-acc.aspx">
              Student Ability Success Center
            </a>
            .
          </p>

          <h3 className="font-semibold">Classroom Etiquette:</h3>
          <p className="mb-5">
            Cell phones should be turned off or set to vibrate mode during
            class. If using laptops/electronic equipment to take notes, please
            use it on mute. Class participation is highly encouraged; ask
            questions, initiate discussions in a respectful manner.
          </p>

          <h3 className="font-semibold">Academic Honesty:</h3>
          <p className="mb-5">
            The college experience is founded on the concepts of honesty and
            integrity. Dishonesty, cheating, plagiarism, or knowingly furnishing
            false information to the college are regarded as particularly
            serious offenses. Cases of dishonesty will be handled by levying
            certain penalties. However, in flagrant cases, the penalty may be
            dismissal from the college after proper due process proceedings.
          </p>

          <h3 className="font-semibold">Special Accommodations:</h3>
          <p className="mb-5">
            If you are a student with a disability and believe you will need
            accommodations for this class, it is your responsibility to contact
            Student Disability Services at (619) 594-6473. To avoid any delay in
            the receipt of your accommodations, you should contact Student
            Disability Services as soon as possible. Please note that
            accommodations are not retroactive, and that accommodations based
            upon disability cannot be provided until you have presented your
            instructor with an accommodation letter from Student Disability
            Services. Your cooperation is appreciated.
          </p>

          <Separator />
        </div>
      ) : (
        <div className="font-roboto_condensed">
          <h3 className="font-semibold">Course Catalog Description:</h3>
          <p className="mb-5">
            Algorithms for solving frequently occurring problems. Analysis
            techniques, divide and conquer algorithms with applications, graph
            problems, greedy algorithms. Introduction to NP complete problems.
            <strong>Prerequisite(s):</strong> CS 210 and MATH 245.
          </p>

          <h3 className="font-semibold">Goals for this Course:</h3>
          <p className="mb-5">
            Upon completion of this course students will be able to:
          </p>
          <ul className="mb-5">
            <li>Analyze and measure complexities of algorithms</li>
            <li>Write Proof of optimality and completeness of algorithms</li>
          </ul>

          <h3 className="font-semibold">Textbook:</h3>
          <p className="mb-5">
            <ul className="mb-5">
              <li>The Algorithm Design Manual - Steven Skiena</li>
              <li>
                Computer Algorithms - Introduction to Design & Analysis - Sara
                Baase & Allen Van Gelder
              </li>
            </ul>
          </p>

          <h3 className="font-semibold">Grading:</h3>
          <p className="mb-5">
            <ul className="mb-5">
              <li>Weekly Assignments (35%)</li>
              <li>Quizzes & Participation (10%)</li>

              <li>2 Midterms (15% + 15%)</li>
              <li>Final Exam (25%)</li>
            </ul>
            <strong>Grade Split:</strong>
            <ul>
              <li>93% and above: A</li>
              <li>90%-92%: A–</li>
              <li>87%-89%: B+</li>
              <li>83%-86%: B</li>
              <li>80%-82%: B–</li>
              <li>77%-79%: C+</li>
              <li>73%-76%: C</li>
              <li>70%-72%: C–</li>
              <li>67%-69%: D+</li>
              <li>63%-66%: D</li>
              <li>60%-62%: D–</li>
              <li>Below 60%: F</li>
            </ul>
          </p>

          <h3 className="font-semibold">Turning in Work:</h3>
          <p className="mb-5">
            Instructions on what, when, where, and how to turn in assignments
            will be posted on Canvas, email, and Discord. It is the student’s
            responsibility to understand when and how to turn in the
            assignments.
          </p>

          <h3 className="font-semibold">Late Coursework:</h3>
          <p className="mb-5">
            All assignments are due on the date as stated on canvas. Once the
            due has passed links will be closed. Late Assignments will be marked
            down 25% every day of delay.
            <ul className="mb-5">
              <li>1 Day Late -25%</li>
              <li>2 Days Late -50%</li>
              <li>3 Day Late -75%</li>
              <li>4Th Day - Automatic zero</li>
            </ul>
          </p>

          <h3 className="font-semibold">Exams:</h3>
          <p className="mb-5">
            Exams will be closed book/closed notes. Computers/laptops and cell
            phones cannot be used during exams. Once an exam starts, students
            cannot leave and then return to the test room. Once a student leaves
            the test room, he/she may not work further on the exam. Do not seek
            assistance from other students during an exam, for doing so
            constitutes cheating. Instead, speak with the instructor. The date,
            time, and location of the midterms and final exam will be posted on
            Canvas.
          </p>
          <p className="mb-5">
            Unexcused absences on the day of an exam will result in the student
            receiving a 0 on the exam. No make-up exams will be given for
            unexcused absences from the exam. If the student has a prior known
            conflict on the date of the exam, please submit a request to
            reschedule to the instructor at least 5 days prior to the exam date.
            Rescheduling will be at the discretion of the instructor. If
            approved, the student may take the exam on an earlier date. If the
            student misses the exam due to an unforeseen circumstance, email the
            instructor to discuss options. Absence must be documented for
            rescheduling to be considered. If you need special accommodations
            for testing kindly contact the Student Ability Success Center ASAP:{' '}
            <a href="https://newscenter.sdsu.edu/student_affairs/sds/test-acc.aspx">
              Student Ability Success Center
            </a>
            .
          </p>

          <h3 className="font-semibold">Classroom Etiquette:</h3>
          <p className="mb-5">
            Cell phones should be turned off or set to vibrate mode during
            class. If using laptops/electronic equipment to take notes, please
            use it on mute. Class participation is highly encouraged; ask
            questions, initiate discussions in a respectful manner.
          </p>

          <h3 className="font-semibold">Academic Honesty:</h3>
          <p className="mb-5">
            The college experience is founded on the concepts of honesty and
            integrity. Dishonesty, cheating, plagiarism, or knowingly furnishing
            false information to the college are regarded as particularly
            serious offenses. Cases of dishonesty will be handled by levying
            certain penalties. However, in flagrant cases, the penalty may be
            dismissal from the college after proper due process proceedings.
          </p>

          <h3 className="font-semibold">Special Accommodations:</h3>
          <p className="mb-5">
            If you are a student with a disability and believe you will need
            accommodations for this class, it is your responsibility to contact
            Student Disability Services at (619) 594-6473. To avoid any delay in
            the receipt of your accommodations, you should contact Student
            Disability Services as soon as possible. Please note that
            accommodations are not retroactive, and that accommodations based
            upon disability cannot be provided until you have presented your
            instructor with an accommodation letter from Student Disability
            Services. Your cooperation is appreciated.
          </p>

          <Separator />
        </div>
      )}
    </div>
  )
}
