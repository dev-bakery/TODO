import { useRecoilState, useRecoilValue } from 'recoil';
import { toDoState, isLightAtom } from './atoms';
import styled from 'styled-components';
import CreateTodo from './components/CreateTodo';
import ToDoItem from './components/ToDoItem';


const Title = styled.h1`
    color : ${props => props.theme.textColor}
`;
const Button = styled.button`
    position: absolute;
    right:0;
    top:0;
`;

// function TodoList(){
//     const [todo, setTodo] = useState("");
//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget : {value},
//         } = event;
//         setTodo(value)
//     } 
//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//     }
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={todo} placeholder='Write a to do'/>
//                 <button>Add</button>
//             </form>
//         </div>
//     )
// }



function TodoList() {
    const toDos = useRecoilValue(toDoState);
    const [isLight, setIsLight] = useRecoilState(isLightAtom);
    const theme = isLight ? "light" : "dark";

    return (
        <div>
            <Title>To Dos</Title>
            <CreateTodo />
            <ul>
                {toDos.map((toDo) => <ToDoItem key={toDo.id} {...toDo} />)}
            </ul>
            <Button onClick={() => { setIsLight((prev) => !prev) }}>{theme}</Button>
        </div>
    )
}

export default TodoList;