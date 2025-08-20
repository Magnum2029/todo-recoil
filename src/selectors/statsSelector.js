import { selector } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export const statsSelector = selector({
  key: 'statsSelector',
  get: ({ get }) => {
    const list = get(todoListState)
    const total = list.length
    const completed = list.filter(t => t.done).length
    return { total, completed, pending: total - completed }
  },
})
