import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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
interface IForm{
    todo : string
}
function TodoList(){
    // register 함수 안에 onBlur, onChange, ref 함수가 있음
    const {register, handleSubmit } = useForm<IForm>();
    const onValid = (data: IForm) => {
        console.log(data.todo)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register('todo', {required: "Please Write a to do"})} placeholder='Write a to do'/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default TodoList;