import { lists } from './../types/index';
import { atom, selector } from "recoil";

export const listsState = atom<lists[]>({
    key: 'listsState',
    default: [{
        todo: 'Add Todo!',
        isCompleted: false
    }]
})

export const listsSelector = selector<any>({
    key: 'listsSelector',
    get: ({ get }) => {
        return () => get(listsState)
    },
    set: ({ set }) => {

        return {

        }
    }
})