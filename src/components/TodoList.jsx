import { useRecoilValue } from 'recoil'
import { filteredTodosSelector } from '../selectors/filteredTodos'
import TodoItem from './TodoItem'

export default function TodoList() {
  const list = useRecoilValue(filteredTodosSelector)

  if (!list.length) return <p className="empty">Nenhuma tarefa por aqui…</p>

  return (
    <ul className="grid">
      {list.map(item => <TodoItem key={item.id} item={item} />)}
    </ul>
  )
}
