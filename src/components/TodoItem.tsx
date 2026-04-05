import type { Todo } from '../types'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      />
      <span className={`todo-item-text${todo.completed ? ' completed' : ''}`}>
        {todo.text}
      </span>
      <button className="btn-delete" onClick={() => onDelete(todo.id)} aria-label={`Delete "${todo.text}"`}>
        Delete
      </button>
    </li>
  )
}
