import { selector } from 'recoil'
import { todoListState } from '../atoms/todoAtom'
import { filterState } from '../atoms/filterAtom'

export const filteredTodosSelector = selector({
  key: 'filteredTodos',
  get: ({ get }) => {
    const list = get(todoListState)
    const filter = get(filterState)

    if (filter === 'completed') return list.filter(t => t.done)
    if (filter === 'pending')   return list.filter(t => !t.done)
    return list
  },
})
