import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { TodoItem } from '../components/TodoItem'
import type { Todo } from '../types'

const todo: Todo = { id: '1', text: 'Test task', completed: false, createdAt: 0 }
const completedTodo: Todo = { ...todo, completed: true }

describe('TodoItem', () => {
  it('renders the todo text', () => {
    render(<TodoItem todo={todo} onToggle={vi.fn()} onDelete={vi.fn()} />)
    expect(screen.getByText('Test task')).toBeInTheDocument()
  })

  it('applies line-through style when completed', () => {
    render(<TodoItem todo={completedTodo} onToggle={vi.fn()} onDelete={vi.fn()} />)
    const label = screen.getByText('Test task')
    expect(label).toHaveStyle({ textDecoration: 'line-through' })
  })

  it('calls onToggle with the correct id when checkbox is clicked', async () => {
    const onToggle = vi.fn()
    render(<TodoItem todo={todo} onToggle={onToggle} onDelete={vi.fn()} />)
    await userEvent.click(screen.getByRole('checkbox'))
    expect(onToggle).toHaveBeenCalledWith('1')
  })

  it('calls onDelete with the correct id when delete button is clicked', async () => {
    const onDelete = vi.fn()
    render(<TodoItem todo={todo} onToggle={vi.fn()} onDelete={onDelete} />)
    await userEvent.click(screen.getByRole('button', { name: /delete/i }))
    expect(onDelete).toHaveBeenCalledWith('1')
  })
})
