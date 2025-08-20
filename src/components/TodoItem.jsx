import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export default function TodoItem({ item }) {
  const [list, setList] = useRecoilState(todoListState)

  const toggle = () =>
    setList(list.map(t => t.id === item.id ? { ...t, done: !t.done } : t))

  const remove = () =>
    setList(list.filter(t => t.id !== item.id))

  return (
    <li className="card">
      <label className="check">
        <input type="checkbox" checked={item.done} onChange={toggle} />
        <span className={item.done ? 'done' : ''}>{item.text}</span>
      </label>
      <button className="danger" onClick={remove}>Remover</button>
    </li>
  )
}
