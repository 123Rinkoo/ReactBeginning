import './ExpenseItem.css'

function ExpenseItem(props){
    
    return (
        <div >
            <div className='expense-item h2'>
                <div>Food, RS 10,</div>
                <div>{props.location}|</div>
                <div>Petrol RS 100 |</div>
                <div>Movies RS 200</div>
            </div>
        </div>
    );
}
export default ExpenseItem;