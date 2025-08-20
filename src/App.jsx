import TodoForm from './components/TodoForm'
import FilterBar from './components/FilterBar'
import TodoList from './components/TodoList'
import { useRecoilValue } from 'recoil'
import { statsSelector } from './selectors/statsSelector'

export default function App() {
  const stats = useRecoilValue(statsSelector)

  return (
    <div className="container">
      <h1>To-do • Recoil</h1>
      <p className="subtitle">
        {stats.total} tarefas • {stats.completed} concluídas • {stats.pending} pendentes
      </p>

      <TodoForm />
      <FilterBar />
      <TodoList />
    </div>
  )
}
