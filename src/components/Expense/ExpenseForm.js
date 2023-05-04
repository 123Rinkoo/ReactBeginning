import React,{useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm=()=> {
    const [userInput, setUserInput]=useState({
        enteredDesc:'',
        enteredAmount:'',
        enteredCategory:''
     });

    const changeHandler1=(event)=>{
         setUserInput({
             ...userInput,
             enteredDesc: event.target.value
         })
     }
     
    const changeHandler2=(event)=>{
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        })
        
    }
    const changeHandler3=(event)=>{
        setUserInput({
            ...userInput,
            enteredCategory: event.target.value
        })
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(userInput);
    }
    return (
        <div>
            <form onClick={submitHandler}>
                Description:<input type="text" onChange={changeHandler1}/>
                | Expense Amount: <input type="text" onChange={changeHandler2}/>
                | Category: <select name="Category" id="" onChange={changeHandler3}>
                    <option value="Health">Health</option>
                    <option value="Food">Food</option>
                    <option value="Fuel">Fuel</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Movie">Movie</option>
                </select>
                | <button type='submit'>Add Expense</button>
                    
            </form>
        </div>
    );
}
export default ExpenseForm;