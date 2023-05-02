import React,{useState} from 'react';

const ExpenseDetail=(props)=> {
    var expense1='Food';
    const [oldExpense, setExpense]=useState(expense1);
    const updatingExpense=()=>{
        setExpense('Momos');
    }
    return (
        <div>
            <div>({props.location})</div>
            <div>{oldExpense} RS 10</div>
            <div>Petrol RS 100 </div>
            <div>Movies RS 200</div>
        <button onClick={updatingExpense}>Update Expense</button>
        </div>
    );
}

export default ExpenseDetail; 