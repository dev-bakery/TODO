import { useRecoilValue } from 'recoil';
import { toDoState } from './atoms';
import CreateTodo from './components/CreateTodo';
import ToDoItem from './components/ToDoItem';

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
        <div>
            <h1>To Dos</h1>
            <CreateTodo />
            <ul>
                {toDos.map((toDo) => <ToDoItem key={toDo.id} {...toDo} />)}
            </ul>
        </div>
    )
}

export default TodoList;