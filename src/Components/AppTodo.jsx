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
        if(newTodo.title!==''){
            arrItem.push(newTodo)

            setTodos(arrItem)
            setValue('')
        }
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
                    className={css.inputSearch}
                />
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-plus" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={handleSubmit}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
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