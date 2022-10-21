import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) =>{

const [filteredYear,setFilteredYear] =useState('2020');


  const filterChangeHandler =(data) =>{
    console.log(data)
    setFilteredYear(data);
  console.log(filteredYear);
    }

    return(
<div>

        <Card className="expenses">
        <ExpensesFilter
   onChangeFilter={filterChangeHandler}
   selected={filteredYear}
/>

{props.items.map((expense)=>(
<ExpenseItem
key={expense.id}
title={expense.title}
amount = {expense.amount}
date ={expense.date}
/>
))
}
    
      </Card>

      </div>
    )
}

export default Expenses