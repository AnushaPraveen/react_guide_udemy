import './Expenses.css'
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card';
import {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props)
{
    const [filteredYear , setFilteredYear] = useState('2020');

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const filterChangeHandler = (year) =>
    {
        setFilteredYear(year);
    };

    
    return(
        <div>
            
            <Card className='expenses'>
                <ExpensesFilter onYearFilter={filterChangeHandler} selected={filteredYear} />
                <ExpensesChart items={filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>

    );

}

export default Expenses;