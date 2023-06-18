import { useState } from "react"
import  "./styles.css"


export const App = ()=>{
   const [newItem, setNewItem] =useState("")
   const [todos, setTodos] =useState([])

   const handleUserInput = (event) =>{
    //handles the state change
    setNewItem(event.target.value)
   }

   const toggleTodo = (id, completed) =>{
    setTodos(currentTodos =>{
       return currentTodos.map(todo =>{
        if(todo.id ===id){
            return {...todo, completed}
        }
        return todo
       })
    })
   }
   const deleteTodo = (id) =>{
    setTodos (currentTodos =>{
        //use the filter function to remove the passed id
        return currentTodos.filter(todo => todo.id !==id)
    })
   }

   const handleSubmit = (e) =>{
    //handles the form sumit
    e.preventDefault()
    if(newItem){
        setTodos(
            //use a function here which returns the value in the todos array
            currentTodos =>{
                return [
                    ...currentTodos,
                    {id:crypto.randomUUID(),title:newItem, completed:false}
                ]
            }
        )
        //reset each time to submit
        setNewItem(" ")
    
    }else{
        console.log('No item to add')
    }
}

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
            {todos.length ===0 && "No Items to do"}
            {todos.map(todo =>{
            return(
                <li key={todo.id}>
                <label>
                <input type="checkbox" 
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                key={todo.id}
                checked ={todo.completed} />
                {todo.title}
                </label>
                <button className ="btn btn-danger"
                onClick={() =>deleteTodo(todo.id)}
                >Delete</button>
            </li>)      

            })}
            

        </ul>

        </>
    )
}