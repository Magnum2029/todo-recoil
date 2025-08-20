import { atom } from 'recoil'

export const filterState = atom({
  key: 'filterState',
  default: 'all', // 'all' | 'completed' | 'pending'
})
