import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();

export interface ITodo{
    text: string;
    id: number;
    category: "DONE" | "DOING" | "TODO";
}
export const toDoState = atom<ITodo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [persistAtom],
});