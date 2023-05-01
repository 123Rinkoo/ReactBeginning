import ExpenseDetail from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItem=(props)=> {

    return (
        <div>
            <div className='expense-item h2'>
                <ExpenseDetail location={props.location} />
            <button onClick={()=>{ console.log('item is going to be deleted!!!')}} >Delete Expense</button>
            </div>
        </div>
    );
}
export default ExpenseItem;