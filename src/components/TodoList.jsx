import { useRecoilValue } from 'recoil'
import { filteredTodosState } from '../selectors/filteredTodos'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useRecoilValue(filteredTodosState)

  if (!todos.length) {
    return <div className="item">Nenhuma tarefa cadastrada.</div>
  }

  return (
    <div>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}
