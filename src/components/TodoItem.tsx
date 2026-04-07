import { useState, useRef, useEffect } from 'react'
import type { Todo } from '../types'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
  onUpdate: (id: string, text: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onUpdate, onDelete }: Props) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(todo.text)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editing) inputRef.current?.focus()
  }, [editing])

  function startEdit() {
    setDraft(todo.text)
    setEditing(true)
  }

  function save() {
    onUpdate(todo.id, draft)
    setEditing(false)
  }

  function cancel() {
    setEditing(false)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') save()
    if (e.key === 'Escape') cancel()
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      />
      {editing ? (
        <input
          ref={inputRef}
          className="todo-edit-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={save}
          aria-label="Edit task"
        />
      ) : (
        <span
          className={`todo-item-text${todo.completed ? ' completed' : ''}`}
          onDoubleClick={startEdit}
          title="Double-click to edit"
        >
          {todo.text}
        </span>
      )}
      <button className="btn-delete" onClick={() => onDelete(todo.id)} aria-label={`Delete "${todo.text}"`}>
        Delete
      </button>
    </li>
  )
}
