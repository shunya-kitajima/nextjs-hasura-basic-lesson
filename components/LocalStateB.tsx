import React from 'react'
import { todoVar } from '../cache'
import { useReactiveVar } from '@apollo/client'
import Link from 'next/link'

const LocalStateB: React.FC = () => {
  const todos = useReactiveVar(todoVar)

  return (
    <>
      {todos?.map((task, index) => {
        return (
          <p className="mb-3 y-1" key={index}>
            {task.title}
          </p>
        )
      })}
      <Link href="/local-state-a">
        <a>Back</a>
      </Link>
    </>
  )
}

export default LocalStateB
