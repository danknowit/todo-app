import { renderHook, act } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useTodos } from '../hooks/useTodos'

const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value },
    clear: () => { store = {} },
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

beforeEach(() => {
  localStorageMock.clear()
})

describe('useTodos', () => {
  it('starts with an empty list', () => {
    const { result } = renderHook(() => useTodos())
    expect(result.current.todos).toEqual([])
  })

  it('addTodo adds a todo with correct fields', () => {
    const { result } = renderHook(() => useTodos())
    act(() => { result.current.addTodo('Buy milk') })
    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0].text).toBe('Buy milk')
    expect(result.current.todos[0].completed).toBe(false)
    expect(result.current.todos[0].id).toBeDefined()
  })

  it('addTodo ignores empty or whitespace-only strings', () => {
    const { result } = renderHook(() => useTodos())
    act(() => { result.current.addTodo('   ') })
    expect(result.current.todos).toHaveLength(0)
  })

  it('toggleTodo flips completed', () => {
    const { result } = renderHook(() => useTodos())
    act(() => { result.current.addTodo('Task') })
    const id = result.current.todos[0].id
    act(() => { result.current.toggleTodo(id) })
    expect(result.current.todos[0].completed).toBe(true)
    act(() => { result.current.toggleTodo(id) })
    expect(result.current.todos[0].completed).toBe(false)
  })

  it('deleteTodo removes the correct todo', () => {
    const { result } = renderHook(() => useTodos())
    act(() => { result.current.addTodo('First') })
    act(() => { result.current.addTodo('Second') })
    const idToDelete = result.current.todos[0].id
    act(() => { result.current.deleteTodo(idToDelete) })
    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0].text).toBe('Second')
  })

  it('loads todos from localStorage on init', () => {
    const stored = [{ id: '1', text: 'Persisted', completed: false, createdAt: 0 }]
    localStorageMock.setItem('todos', JSON.stringify(stored))
    const { result } = renderHook(() => useTodos())
    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0].text).toBe('Persisted')
  })

  it('writes todos to localStorage on change', () => {
    const setItemSpy = vi.spyOn(localStorageMock, 'setItem')
    const { result } = renderHook(() => useTodos())
    act(() => { result.current.addTodo('Task') })
    expect(setItemSpy).toHaveBeenCalledWith('todos', expect.stringContaining('Task'))
  })

  it('falls back to empty array when localStorage has corrupted JSON', () => {
    localStorageMock.setItem('todos', 'not-valid-json')
    const { result } = renderHook(() => useTodos())
    expect(result.current.todos).toEqual([])
  })
})
