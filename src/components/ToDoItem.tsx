import React from 'react'
import { useSetRecoilState } from 'recoil';
import { ITodo, toDoState } from '../atoms'

function ToDoItem({text, category, id}:ITodo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name},
        } = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const oldToDo = oldToDos[targetIndex];
            const newToDo = {text, id, category: name};
            return oldToDos;
        })
    }
    const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = oldToDos.slice(targetIndex+1);
            return newToDo
        })
    }
    return <li>
        <span>{text}</span>
        {category !== "DOING" && <button name='DOING' onClick={onClick}>Doing</button>}
        {category !== "TODO" && <button name='TODO' onClick={onClick}>To Do</button>}
        {category !== "DONE" && <button name='DONE' onClick={onClick}>Done</button>}
        <button onClick={onDelete}>Delete</button>
    </li>
}

export default ToDoItem