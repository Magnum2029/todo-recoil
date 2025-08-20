import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export default function TodoForm() {
  const [text, setText] = useState('')
  const setList = useSetRecoilState(todoListState)

  function addTodo(e) {
    e.preventDefault()
    const value = text.trim()
    if (!value) return
    setList(old => [
      ...old,
      { id: crypto.randomUUID(), text: value, done: false }
    ])
    setText('')
  }

  return (
    <form className="row" onSubmit={addTodo}>
      <input
        className="input"
        placeholder="Digite uma tarefa…"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="btn">Adicionar</button>
    </form>
  )
}
