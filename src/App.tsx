import { useState } from 'react'
import { useTodos } from './hooks/useTodos'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { FilterBar } from './components/FilterBar'
import type { Filter } from './components/FilterBar'

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos()
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="app">
      <h1>Todo</h1>
      <TodoInput onAdd={addTodo} />
      <FilterBar
        current={filter}
        onChange={setFilter}
        hasCompleted={todos.some((t) => t.completed)}
        onClearCompleted={clearCompleted}
      />
      <TodoList todos={filtered} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  )
}
