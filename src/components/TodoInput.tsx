import { useState } from 'react'

interface Props {
  onAdd: (text: string) => void
}

export function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState('')

  function handleSubmit() {
    onAdd(value)
    setValue('')
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="todo-input">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
        aria-label="New task"
      />
      <button className="btn-add" onClick={handleSubmit}>Add</button>
    </div>
  )
}
