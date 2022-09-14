import { useRecoilValue } from 'recoil';
import { toDoState } from './atoms';
import styled from 'styled-components';
import CreateTodo from './components/CreateTodo';
import ToDoItem from './components/ToDoItem';

const BoxContents = styled.div`
    padding:30px;
`;
const Title = styled.h1`
    font-size:25px;
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



function TodoList(){
    const toDos = useRecoilValue(toDoState);
    return (
        <BoxContents>
            <Title>To Dos</Title>
            <CreateTodo />
            <ul>
                {toDos.map((toDo) => <ToDoItem key={toDo.id} {...toDo} />)}
            </ul>
        </BoxContents>
    )
}

export default TodoList;