import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        // console.log('Expense.js');
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    select={filteredYear} 
                    onChangeFilter={filterChangeHandler} 
                /> 
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;