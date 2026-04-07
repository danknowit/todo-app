import { useState } from 'react'
import { useTodos } from './hooks/useTodos'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { FilterBar } from './components/FilterBar'
import type { Filter } from './components/FilterBar'

export default function App() {
  const { todos, addTodo, toggleTodo, updateTodo, deleteTodo, clearCompleted } = useTodos()
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.completed).length

  return (
    <div className="app">
      <div className="app-header">
        <h1>Todo</h1>
        {todos.length > 0 && (
          <span className="todo-count">
            {activeCount} {activeCount === 1 ? 'item' : 'items'} left
          </span>
        )}
      </div>
      <TodoInput onAdd={addTodo} />
      <FilterBar
        current={filter}
        onChange={setFilter}
        hasCompleted={todos.some((t) => t.completed)}
        onClearCompleted={clearCompleted}
      />
      <TodoList todos={filtered} onToggle={toggleTodo} onUpdate={updateTodo} onDelete={deleteTodo} />
    </div>
  )
}
