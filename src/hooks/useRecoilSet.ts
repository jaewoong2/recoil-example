import { getData } from './../api/index';
import { lists } from './../types/index';
import { useSetRecoilState } from "recoil"
import { listsState, loadingState } from "../recoil"

export const useRecoilHooks = () => {
    const setLoading = useSetRecoilState(loadingState);
    const setLists = useSetRecoilState(listsState);

    return {
        init: async () => {
            setLoading(true);
            setLists(await getData(0));
            setLoading(false);
        },
        addLists: (newTodo: lists) =>
            setLists(((prev) => [newTodo, ...prev])),
        removeLists: (index: number) =>
            setLists(((prevState) => [...prevState.slice(0, index), ...prevState.slice(index + 1, prevState.length)])),
        updateLists: ({ newTodo, index }: { newTodo: lists, index: number }) =>
            setLists((prevState => prevState.map((todo, i) => i === index ? newTodo : todo)))
    }
}