import React,{useState} from 'react';

const ExpenseDetail=(props)=> {
    let expense1='Food';
    let money=100;
    const [oldExpense, setExpense]=useState(expense1);
    const [oldMoney, setMoney]= useState(money);
    const updatingExpense=()=>{
        setExpense('Momos');
        setMoney('237');
    }
    return (
        <div>
            <div>({props.location})</div>
            <div>{oldExpense} RS 10</div>
            <div>Petrol RS {oldMoney} </div>
            <div>Movies RS 200</div>
        <button onClick={updatingExpense}>Update Expense</button>
        </div>
    );
}

export default ExpenseDetail; 