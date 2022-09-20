import React from 'react'
import { useSetRecoilState } from 'recoil';
import { ITodo, toDoState } from '../atoms';
import styled from 'styled-components';

const ListItem = styled.li`
    display:flex;
    padding:5px;
`;
const Text = styled.span`
    flex:1;
    font-size:14px;
    line-height:28px;
`;
const Button = styled.button`
`;

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
    return <ListItem>
        {category !== "DOING" && <Button name='DOING' onClick={onClick}>Doing</Button>}
        {category !== "TODO" && <Button name='TODO' onClick={onClick}>To Do</Button>}
        {category !== "DONE" && <Button name='DONE' onClick={onClick}>Done</Button>}
        <Text>{text}</Text>
        <Button onClick={onDelete}>Delete</Button>
    </ListItem>
}

export default ToDoItem