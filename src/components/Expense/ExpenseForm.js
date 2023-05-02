import './ExpenseForm.css'

const ExpenseForm=()=> {
    const changeHandler=(event)=>{
        console.log(event.target.value);
    }
    return (
        <div>
            <form action="">
                Description:<input type="text" onChange={changeHandler}/>
                | Expense Amount: <input type="text" />
                | Category: <select name="Category" id="">
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