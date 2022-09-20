import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atoms';
import styled from 'styled-components';
interface IForm{
    toDo : string
}
const BoxFormWrap = styled.div`
    margin-top:20px;
`;
const FormContent = styled.form`
    display: flex;
`;
const FormInput = styled.input`
    flex:1;
    font-size:14px;
    padding:5px;
`;
const Button = styled.button`
    margin-left:5px;
    font-size:14px;
`;

function CreateTodo(){
    const setToDos = useSetRecoilState(toDoState);
    // register 함수 안에 onBlur, onChange, ref 함수가 있음
    const {register, handleSubmit, setValue } = useForm<IForm>();
    const onValid = ({toDo}: IForm) => {  
        setToDos((oldToDos) => [({text: toDo,id: Date.now(), category:"TODO"}), ...oldToDos] );
        setValue("toDo", "");
    }
    return(
        <BoxFormWrap>
            <FormContent onSubmit={handleSubmit(onValid)}>
                <FormInput {...register('toDo', {required: "Please Write a to do"})} placeholder='Write a to do'/>
                <Button onClick={handleSubmit(onValid)}>Add</Button>
            </FormContent>
        </BoxFormWrap>
    )
}

export default CreateTodo;