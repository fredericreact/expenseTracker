# React

```javascript
import React from 'react';
```
Transforme le JSX


# Multiple State

setState va non seulement updater le state mais aussi rerender le component
Meme si j’ai 4 expense items repete 4 fois, chaque expense item a son propre state independant

You can have multiple states or only 1 state


```javascript
const [enteredTitle, setEnteredTitle]= useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('')
```


```javascript
const [userInput, setUserInput] = useState({
    enteredTitle: '',
    eneteredAmount:'',
    enteredDate:''
})
```
Multi state is more common

Then you combine them into 1 object : 

```javascript
const submitHandler = (event) => {
const expenseData = {
    title: enteredTitle,
    amount:enteredAmount,
    date: new Date(enteredDate)
}
}
```

# Update State

To update the state, this method is not good because , you depend on the previous state, and you are not sure you are getting the latest state because react schedule state updates , it doesn’t perform them instantly

```javascript
const titleChangeHandler = (event) =>{
setUserInput({
    ...userInput,
    enteredTitle: event.target.value,
})
}
```

You should do it like this :


```javascript
const titleChangeHandler = (event) =>{
setUserInput((prevState)=>{
return {...prevState, enteredTitle:event.target.value}
})
}
```

Here you receive the previous state


# Passer donness du child aud parent (lifting state up)

Passer des donnees du child component au parent component (or lifting state up) : parent component passe fonction to child component.

Ici, ExpenseForm ou ExpenseFilter est  ce qu’on appelle un controlled component : un component qui passe data a son parent et recoit data de son parent en meme temps 

La value et la modification de value ne sont pas geres dans le component mais dans son parent


```javascript
function App() {
 
const addExpenseHandler =(expense) => {
  console.log('in app js')
  console.log(expense)
}
 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

```

```javascript
const NewExpense = (props) => {
 
const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
...enteredExpenseData,
id: Math.random().toString()
    }
 
    props.onAddExpense(expenseData);
}
 
    return <div className='new-expense'>
     <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} />
    </div>
};
 
export default NewExpense;
```

```javascript
import React , {useState} from 'react';
import './ExpenseForm.css'
 
const ExpenseForm = (props) => {
 
const [enteredTitle, setEnteredTitle]= useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('')
 
 
const titleChangeHandler = (event) =>{
setEnteredTitle(event.target.value)
}
const amountChangeHandler = (event) => {
setEnteredAmount(event.target.value);
}
 
const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value);
}
 
const submitHandler = (event) => {
 
    event.preventDefault();
 
const expenseData = {
    title: enteredTitle,
    amount:enteredAmount,
    date: new Date(enteredDate)
}
props.onSaveExpenseData(expenseData);
 
setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('');
 
}
 
return (
    <form onSubmit={submitHandler}>
 
<div className='new-expense__controls'>
 
 
<div className='new-expense__control'>
<label>Title</label>
<input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
</div>
 
 
<div className='new-expense__control'>
<label>Amount</label>
<input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
</div>
 
<div className='new-expense__control'>
<label>Date</label>
<input type="date" min="2019-01-01" step="2022-12-31" value ={enteredDate}onChange={dateChangeHandler}/>
</div>
 
 
</div>
 
 
<div className='new-expense__actions'>
    <button type='submit'>Add Expense</button>
</div>
 
     </form>
   )
};
 
export default ExpenseForm;
 
 
<form></form>
```

# Map
Pour map function, ajouter key parce que si no key, dans une liste d’expense items, quand tu rajoute un element, ca va ecraser le premier element (pb si tu as un state a l’intereieur) puis ca va rajouter le reste a partir de ton array.

Avec le key, ca va juste l’ajouter en haut sans remplacer aucun element.
