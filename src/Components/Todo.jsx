import { useState } from "react";
import css from './modules/Todo.module.css'

const Todo = ({title, onUpdate, id, onDelete})=>{
    const [edit, setEdit] = useState(false)
    

    function Todo(){
        const [style, setStyle] = useState(css.todo)

        function handleStyle(){
            if(style===css.todo){
                setStyle(css.todoComplete)
            }
            else{
                setStyle(css.todo)
            }
        }

        return(
            <div className={style}>
            <span className={css.todoTitle}
            onClick={handleStyle}
            >{title}</span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" className={css.todoIcon} width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={()=>setEdit(true)}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className={css.todoIcon} width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={e=>onDelete(id)}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7h16" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    <path d="M10 12l4 4m0 -4l-4 4" />
                </svg>
            </div>
        </div>
        )
    }
    function Update(){
        const [newValue, setNewValue] = useState(title)

        function handleSubmit(e){
            e.preventDefault()
        }
        function handleChange(e){
            const value = e.target.value;

            setNewValue(value)
        }
        function handleClick(){
            onUpdate(id, newValue)
            setEdit(false)
        }

        return(
            <div>
            <form onSubmit={handleSubmit}  className={css.update}>
                <input type="text" 
                onChange={handleChange}
                value={newValue}
                className={css.updateInput}
                />
                    <svg xmlns="http://www.w3.org/2000/svg" className={css.todoIcon} width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round" type='submit' onClick={handleClick}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 12l2 2l4 -4" />
                    </svg>
            </form>
        </div>
        )
    }

    return(
        <div className={css.containerTodo}>
            {edit ? <Update/> : <Todo/>}
        </div>
    )
}

export default Todo;