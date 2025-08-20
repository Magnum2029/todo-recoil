import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export default function TodoForm() {
  const [text, setText] = useState('')
  const setList = useSetRecoilState(todoListState)

  function addTodo(e) {
    e.preventDefault()
    if (!text.trim()) return
    setList(prev => [...prev, { id: crypto.randomUUID(), text: text.trim(), done: false }])
    setText('')
  }

  return (
    <form onSubmit={addTodo}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nova tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

