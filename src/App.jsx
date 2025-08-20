// src/App.jsx
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import FilterBar from './components/FilterBar'

export default function App() {
  return (
    <div className="container">
      <h1>Todo List Avançado ✅</h1>
      <TodoForm />
      <FilterBar />
      <TodoList />
    </div>
  )
}
