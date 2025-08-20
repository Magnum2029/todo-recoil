import { selector } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export const statsState = selector({
  key: 'statsState',
  get: ({ get }) => {
    const list = get(todoListState)
    const total = list.length
    const done = list.filter(t => t.done).length
    return { total, done, pending: total - done }
  },
})

