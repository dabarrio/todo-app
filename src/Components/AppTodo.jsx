import { useState } from "react";
import Todo from "./Todo";
import css from './modules/TodoApp.module.css'
const AppTodo = () => {

    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])

    function handleChange(e) {
        let todo = e.target.value;
        setValue(todo)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newTodo = {
            id: crypto.randomUUID(),
            title: value,
            complete: false
        }

        let arrItem = [...todos]
        arrItem.push(newTodo)

        setTodos(arrItem)
        setValue('')
    }

    function handleUpdate(id, value){
        const temp = [...todos]
        const arr = temp.find(e=>e.id===id)

        arr.title = value
        setTodos(temp)
    }
    function handleDelete(id){
        const temp = todos.filter(e=>e.id!==id)

        setTodos(temp)
    }

    return (
        <div className={css.containerApp}>
            <h1>Lista de Tareas App</h1>
            <form onSubmit={handleSubmit} className={css.containerSearch}>
                <input
                    type="text"
                    placeholder="Ingresa tu tarea"
                    onChange={handleChange}
                    value={value}
                    className = {css.inputSearch}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round" type='submit' onClick={handleClick}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 12l2 2l4 -4" />
                    </svg>
            </form>

            <div className={css.containerTodos}>
                {todos.map(e => (
                    <div key={e.id}>
                        <Todo
                            title={e.title}
                            id={e.id}
                            onUpdate={handleUpdate}
                            onDelete={handleDelete}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AppTodo;