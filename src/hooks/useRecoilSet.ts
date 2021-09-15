import { lists } from './../types/index';
import { useSetRecoilState } from "recoil"
import { listsState } from "../recoil"

export const useRecoilHooks = () => {
    const setLists = useSetRecoilState(listsState);

    return {
        addLists: (newTodo: lists) =>
            setLists(((prev) => [newTodo, ...prev])),
        removeLists: (index: number) =>
            setLists(((prevState) => [...prevState.slice(0, index), ...prevState.slice(index + 1, prevState.length)])),
        updateLists: ({ newTodo, index }: { newTodo: lists, index: number }) =>
            setLists((prevState => prevState.map((todo, i) => i === index ? newTodo : todo)))
    }
}