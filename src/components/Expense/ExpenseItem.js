import ExpenseDetail from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItem=(props)=> {

    return (
        <div>
            <div className='expense-item h2'>
                <ExpenseDetail location={props.location} />
            </div>
        </div>
    );
}
export default ExpenseItem;