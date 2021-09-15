import { lists } from './../types/index';
import { atom, } from "recoil";

export const listsState = atom<lists[]>({
    key: 'listsState',
    default: [{
        todo: 'Add Todo!',
        isCompleted: false
    }]
})

export const loadingState = atom<boolean>({
    key: "loading",
    default: false
})