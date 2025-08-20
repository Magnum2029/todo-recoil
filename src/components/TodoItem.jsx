import { useSetRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export default function TodoItem({ todo }) {
  const setList = useSetRecoilState(todoListState)

  const toggle = () => setList(prev =>
    prev.map(t => t.id === todo.id ? { ...t, done: !t.done } : t)
  )
  const remove = () => setList(prev => prev.filter(t => t.id !== todo.id))

  return (
    <div className="item">
      <label style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        <input type="checkbox" checked={todo.done} onChange={toggle} />
        {todo.text}
      </label>
      <button onClick={remove}>Excluir</button>
    </div>
  )
}

