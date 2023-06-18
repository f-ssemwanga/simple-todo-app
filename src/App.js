import { useState } from "react"
import  "./styles.css"


export const App = ()=>{
   const [newItem, setNewItem] =useState("")
   const [todos, setTodos] =useState([])

   const handleUserInput = (event) =>{
    //handles the state change
    setNewItem(event.target.value)
   }
   const handleSubmit = (e) =>{
    //handles the form sumit
    e.preventDefault()
    
    setTodos(
        //use a function here which returns the value in the todos array
        currentTodos =>{
            return [
                ...currentTodos,
                {id:crypto.randomUUID(),title:newItem, completed:false}
            ]
        }
    )
}
console.log(todos)
    return(
        <>
           <form 
            onSubmit={handleSubmit} className="new-item-form" >
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value ={newItem}
                onChange ={handleUserInput}
                type="text" id="item" />
            </div>
            <button className="btn">Add</button>
           </form>
        <h1 className ="header">To Do list</h1>

        <ul className="list">
            {/* Use a map function to loop through the to dos and render them */}
            <li>
                <label htmlFor="">
                <input type="checkbox" />
                Item 1
                </label>
                <button className ="btn btn-danger">Delete</button>
            </li>

        </ul>

        </>
    )
}