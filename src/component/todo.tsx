import {useState} from 'react'
import React from 'react'
import Task from './Task'

type TaskData = {
    id:number,
    text:string
}

const Todo = () => {
    const [input,setInputValue] = useState<string>("")
    const [todoList,setTodoList] = useState<TaskData[]>([])
    const [doneList,setDoneList] = useState<TaskData[]>([])

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        /* check pressing enter key here */
        if (ev.key === "Enter") addList()
    }

    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(ev.target.value)
      }

    const addList = () => {
        if (input === "") {
            alert("Task connot be empty!!")
        }else{
            const Todo = todoList
            const Id = (new Date()).getTime()
            Todo.push({id:Id,text:input})
            setTodoList(Todo)
            setInputValue("")  
        }
        document.querySelectorAll("input")[0].value = ""
    }
    const addDoneList = (Id: number) => {
        const Done = doneList
        const doneTask = todoList.filter(x => x.id === Id)
        const temp = doneTask.concat(Done)
        setDoneList(temp)

        setTodoList(todoList.filter(x => x.id !== Id))
    }

    const addDeleteList = (Id : number) => {
        setTodoList(todoList.filter(x => x.id !== Id))
    }

    return (
        <div className='mx-auto max-w-4xl'>
            {/* task input and add button */}
            <div className='flex space-x-1'>
                <input className='border border-gray-400 w-full text-2xl'
                    onKeyDown={onKeyDownCallback} onChange={onChangeCallback}></input>
                <button className='border border-gray-400 w-8 font-bold' onClick={addList}>+</button>
            </div>
            {todoList.map( x => <Task id={x.id} text={x.text} doneFn={addDoneList} deleteFn={addDeleteList} statusDone={false}/>).reverse()}
            {doneList.map( x => <Task id={x.id} text={x.text} doneFn={addDoneList} deleteFn={addDeleteList} statusDone={true}/>)}
        </div>
    )
}
export default Todo
