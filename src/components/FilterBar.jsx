import { useRecoilState } from 'recoil'
import { filterState } from '../atoms/filterAtom'

const BTN = ({ value, current, onClick, children }) => (
  <button
    className={`chip ${current === value ? 'active' : ''}`}
    onClick={() => onClick(value)}
    type="button"
  >
    {children}
  </button>
)

export default function FilterBar() {
  const [filter, setFilter] = useRecoilState(filterState)

  return (
    <div className="row gap">
      <BTN value="all" current={filter} onClick={setFilter}>Todas</BTN>
      <BTN value="completed" current={filter} onClick={setFilter}>Concluídas</BTN>
      <BTN value="pending" current={filter} onClick={setFilter}>Pendentes</BTN>
    </div>
  )
}
