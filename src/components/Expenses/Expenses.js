import React, {useState} from 'react';

import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) =>{

const [filteredYear,setFilteredYear] =useState('2020');



  const filterChangeHandler =(data) =>{
 
    setFilteredYear(data);

    }


    const filteredExpenses =  props.items.filter(filtereditem=> filtereditem.date.getFullYear().toString() === filteredYear)


    return(
<div>

        <Card className="expenses">
        <ExpensesFilter
   onChangeFilter={filterChangeHandler}
   selected={filteredYear}
/>

<ExpensesList items={filteredExpenses}/>
    
      </Card>

      </div>
    )
}

export default Expenses