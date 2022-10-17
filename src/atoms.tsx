import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();

export interface ITodo {
    text: string;
    id: number;
    category: "DONE" | "DOING" | "TODO";
}
export const toDoState = atom<ITodo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {

    }
})

export const isLightAtom = atom({
    key: 'isLight',
    default: true,
})