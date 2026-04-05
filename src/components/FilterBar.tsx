export type Filter = 'all' | 'active' | 'completed'

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
]

interface Props {
  current: Filter
  onChange: (filter: Filter) => void
  hasCompleted: boolean
  onClearCompleted: () => void
}

export function FilterBar({ current, onChange, hasCompleted, onClearCompleted }: Props) {
  return (
    <div className="filter-bar">
      {FILTERS.map(({ label, value }) => (
        <button
          key={value}
          className={`filter-btn${current === value ? ' active' : ''}`}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
      {hasCompleted && (
        <button className="btn-clear" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  )
}
