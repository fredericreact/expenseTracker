import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

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

{filteredExpenses.map((expense)=>(
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