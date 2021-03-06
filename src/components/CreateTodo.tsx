import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atoms';

interface IForm{
    toDo : string
}

function CreateTodo(){
    const setToDos = useSetRecoilState(toDoState);
    // register 함수 안에 onBlur, onChange, ref 함수가 있음
    const {register, handleSubmit, setValue } = useForm<IForm>();
    const onValid = ({toDo}: IForm) => {  
        setToDos((oldToDos) => [({text: toDo,id: Date.now(), category:"TODO"}), ...oldToDos] );
        setValue("toDo", "");
    }
    return(
        <form onSubmit={handleSubmit(onValid)}>
            <input {...register('toDo', {required: "Please Write a to do"})} placeholder='Write a to do'/>
            <button onClick={handleSubmit(onValid)}>Add</button>
        </form>
    )
}

export default CreateTodo;