import React , {useState} from 'react'
import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const [titleEntered , setTitleEntered] = useState('');
    const [amountEntered , setAmountEntered] = useState('');
    const [dateEntered , setDateEntered] = useState('');

    const inputChangeHandler = (identifier, value) =>{
        if(identifier === 'title')
            setTitleEntered(value);
        else if(identifier === 'amount')
            setAmountEntered(value);
        else if(identifier === 'date')
            setDateEntered(value);

    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : titleEntered,
            amount : +amountEntered, 
            date : new Date(dateEntered)
        }

        props.onSaveExpenseDate(expenseData);
        setTitleEntered('');
        setAmountEntered('');
        setDateEntered('');

    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={titleEntered}
                    onChange={(event) => inputChangeHandler('title' , event.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={amountEntered}
                    onChange={(event) => inputChangeHandler('amount' , event.target.value )}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={dateEntered }
                    onChange={(event) => inputChangeHandler('date' , event.target.value)}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCancelHandler} >Cancel</button>
                <button type='submit' >Add Expense</button>

            </div>
        </form>
    );
};

export default ExpenseForm;