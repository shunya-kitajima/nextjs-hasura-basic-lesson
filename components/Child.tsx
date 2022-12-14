import React, { ChangeEvent, FormEvent, memo } from 'react'

interface Props {
  printMsg: () => void
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => Promise<void>
}

const Child: React.FC<Props> = ({ printMsg, handleSubmit }) => {
  return (
    <>
      <p>Child Component</p>
      <button
        className="my-3 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl focus:outline-none"
        onClick={printMsg}
      >
        click
      </button>
    </>
  )
}

const ChildMemo = memo(Child)

export default ChildMemo
