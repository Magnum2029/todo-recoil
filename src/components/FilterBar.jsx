import { useRecoilState, useRecoilValue } from 'recoil'
import { filterState } from '../atoms/filterAtom'
import { statsState } from '../selectors/statsSelector'

export default function FilterBar() {
  const [filter, setFilter] = useRecoilState(filterState)
  const stats = useRecoilValue(statsState)

  return (
    <div className="filters">
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
        Todas ({stats.total})
      </button>
      <button onClick={() => setFilter('pending')} disabled={filter === 'pending'}>
        Pendentes ({stats.pending})
      </button>
      <button onClick={() => setFilter('done')} disabled={filter === 'done'}>
        Concluídas ({stats.done})
      </button>
    </div>
  )
}

