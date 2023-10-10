import React , {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{

    const [isAddingNewExpense , SetAddingNewExpense] = useState(false);

    const addNewExpenseHandler = () =>
    {
        SetAddingNewExpense(true);

    };

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {

            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onSaveExpense(expenseData);

    };

    const cancelAddingExpenseHandler = () =>
    {
        SetAddingNewExpense(false);
    }
    return (
        <div className='new-expense'>

            {isAddingNewExpense && <ExpenseForm onSaveExpenseDate={saveExpenseHandler} onCancelHandler={cancelAddingExpenseHandler}/>}
            {!isAddingNewExpense && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
        </div>

    );

};

export default NewExpense;