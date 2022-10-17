import styled from 'styled-components';

const TabContent = styled.div`
    border-bottom: 1px solid #000;
`;
const Button = styled.button`
    border:0;
    font-size:14px;
    background-color: transparent;
    cursor: pointer;
    &.${'active'}{
        font-weight:bold;
        color:royalblue;
    }
`;


function SortTodo(){
    return(
        <TabContent>
            <Button type='button' className='active'>All</Button>
            <Button type='button'>TODO</Button>
            <Button type='button'>DOING</Button>
            <Button type='button'>DONE</Button>
        </TabContent>
    )
}
export default SortTodo;