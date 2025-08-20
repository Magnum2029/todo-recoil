import { selector } from 'recoil'
import { todoListState } from '../atoms/todoAtom'
import { filterState } from '../atoms/filterAtom'

export const filteredTodosState = selector({
  key: 'filteredTodosState',
  get: ({ get }) => {
    const list = get(todoListState)
    const filter = get(filterState)

    if (filter === 'done') return list.filter(t => t.done)
    if (filter === 'pending') return list.filter(t => !t.done)
    return list
  },
})

