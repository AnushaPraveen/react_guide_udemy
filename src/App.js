import logo from './logo.svg';
import react , {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const Dummy_Expenses = [
  {
    id:'e1',
    title:'Toilet paper',
    amount:93.12,
    date: new Date(2020, 7,14),
  },
  {
    id:'e2',
    title : 'Car Insurance',
    amount : 123.34,
    date: new Date(2021,8,22),
  },
  {
    id:'e3',
    amount:32.56,
    title: 'Grocery',
    date : new Date(2020, 3, 26),
  },
  {
    id:'e4',
    title : 'New Desk',
    amount : 499,
    date: new Date(2021, 5, 23),
  },
];

function App() {
    const[expenses , setExpense] = useState(Dummy_Expenses);

  const addExpenseHandler = expense => {
    setExpense((prevExpenses) => {
      return [expense , ...prevExpenses];
    } );

  }

  return (
    <div>
      <NewExpense onSaveExpense={addExpenseHandler}/>
      <Expenses  expenses={expenses}/>
    </div>
  );
}

export default App;
